# -*- coding: utf-8 -*-
"""HackFIn.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1YK0sewCxTmIDbqIHbUj2gSXAwyIywxn0
"""

import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

import os
import numpy as np
import seaborn as sns

from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.feature_selection import SelectFromModel

from sklearn.metrics import confusion_matrix
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score

label_encoder = LabelEncoder()
scaler = StandardScaler()

Parcel = pd.read_csv('/content/FinHack/APNLA.csv')
Burg = pd.read_csv('/content/FinHack/CrimesBurgalry.csv')
Loc = pd.read_csv('/content/FinHack/CrimesLocation.csv')
Soil = pd.read_csv('/content/FinHack/Soil.csv')

Parcel.head()

Burg.head()

Loc.head()

Soil.head()

Parcel.isnull().sum()

Burg.isnull().sum()

Loc.isnull().sum()

Soil.isnull().sum()

Parcel.drop_duplicates()
Parcel.dropna()

Burg.drop_duplicates()
Burg.dropna()

Parcel = Parcel.reset_index(drop=True)
Burg = Burg.reset_index(drop=True)
Loc = Loc.reset_index(drop=True)
Soil = Soil.reset_index(drop=True)

combined_df = pd.concat([Parcel, Burg, Loc, Soil], axis=1)
combined_df['Risk Score'] = None
combined_df = combined_df.reset_index(drop=True)
combined_df.head()

# Download training data from open datasets.
train_data = combined_df.drop(['PIN', 'PIND','Risk Score', 'key', 'key'], axis=1)

# Download test data from open datasets.
test_data = combined_df['Risk Score']

# Get cpu, gpu or mps device for training.
device = (
    "cuda"
    if torch.cuda.is_available()
    else "mps"
    if torch.backends.mps.is_available()
    else "cpu"
)
print(f"Using {device} device")

# Define model
class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(10, 512),  # Changed input size
            nn.ReLU(),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Linear(512, 10)
        )

    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits

model = NeuralNetwork().to(device)
print(model)

loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)

def train(dataloader, model, loss_fn, optimizer):
    size = len(dataloader.dataset)
    model.train()
    for batch, (X, y) in enumerate(dataloader):
        X, y = X.to(device), y.to(device)

        # Compute prediction error
        pred = model(X)
        loss = loss_fn(pred, y)

        # Backpropagation
        loss.backward()
        optimizer.step()
        optimizer.zero_grad()

        if batch % 100 == 0:
            loss, current = loss.item(), (batch + 1) * len(X)
            print(f"loss: {loss:>7f}  [{current:>5d}/{size:>5d}]")

def test(dataloader, model, loss_fn):
    size = len(dataloader.dataset)
    num_batches = len(dataloader)
    model.eval()
    test_loss, correct = 0, 0
    with torch.no_grad():
        for X, y in dataloader:
            X, y = X.to(device), y.to(device)
            pred = model(X)
            test_loss += loss_fn(pred, y).item()
            correct += (pred.argmax(1) == y).type(torch.float).sum().item()
    test_loss /= num_batches
    correct /= size
    print(f"Test Error: \n Accuracy: {(100*correct):>0.1f}%, Avg loss: {test_loss:>8f} \n")

train_data.dtypes

test_data.dtypes

from sklearn.preprocessing import OneHotEncoder
encoder = OneHotEncoder(sparse_output=True, handle_unknown='ignore')  # or sparse=False
train_labels = encoder.fit_transform(train_data.values.reshape(-1, 1))
test_labels = encoder.transform(test_data.values.reshape(-1, 1))  # test_data is 'Risk Score' column

train_data_tensor = torch.tensor(train_data.values, dtype=torch.float32)
#test_data_tensor = torch.tensor(test_data.values, dtype=torch.float32)
test_data_tensor = torch.tensor(test_data.values.astype(np.float32), dtype=torch.float32)

train_dataloader = DataLoader(train_data_tensor, batch_size=64, shuffle=True)
test_dataloader = DataLoader(test_data_tensor, batch_size=64, shuffle=False)

epochs = 5
for t in range(epochs):
    print(f"Epoch {t+1}\n-------------------------------")
    train(train_dataloader, model, loss_fn, optimizer) # Use train_dataloader
    test(test_dataloader, model, loss_fn) # Use test_dataloader
print("Done!")