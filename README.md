Inspiration

This project aims to be a fundamental tool for enhancing community and individual safety. We wanted to create a solution that helps people make informed decisions about where they live, work, or invest, by quantifying the risks associated with specific locations. Whether it's crime, environmental hazards, or cost of living, our risk calculator aims to provide transparent and accessible data to empower better decision-making.

What it does

The Risk Calculator compiles, and combines data from multiple sources, including crime rates, environmental data, flood risks, cost of living indices, and sentiment analysis to provide a comprehensive risk assessment for a given address or location. It generates an easy-to-understand risk score that allows users to quickly gauge the safety and livability of a particular area.

How we built it

We built the project using a combination of machine learning, data aggregation, and web development technologies. The frontend is developed with React to provide an intuitive user interface, allowing users to visualize different types of risks and their severity. The backend consists of a Flask API that serves risk assessments based on pre-processed data and trained machine learning models. Data is collected from sources such as local crime databases, environmental monitoring agencies, and cost of living reports. These datasets are standardized using normalization techniques to ensure consistency across different data formats and scales.

Challenges we ran into

We encountered several challenges, such as finding reliable and consistent datasets for different regions. Integrating multiple data sources and managing inconsistencies between them was particularly challenging. These inconsistencies included differences in data formats, varying levels of data quality, and missing information. To address these issues, we implemented data cleaning processes like standardization and imputation to ensure uniformity and improve data reliability. We also faced the challenge of scaling the machine learning model to serve real-time predictions without compromising accuracy. This involved techniques such as model optimization, batch processing, and deploying the model using scalable cloud services like AWS Lambda to efficiently handle dynamic workloads. Additionally, running the backend smoothly required resolving dependency issues and optimizing the API to handle requests effectively.

Accomplishments that we're proud of

We're proud of successfully integrating a machine learning model to provide risk assessments based on real-world data. The interactive and user-friendly dashboard allows users to access complex information in a simple format. Moreover, we're proud of our ability to overcome the complexities of managing disparate datasets and making sense of them in a meaningful way. We are also very proud of the frontend design, which provides a clean and intuitive experience for users. Key features include easy navigation with clear menus, visually distinct risk categories, and responsive elements that adapt well to different devices. Delivering a functional prototype that helps users evaluate risks based on data is a big accomplishment for our team.

What we learned

We learned a great deal about data aggregation and handling inconsistencies across different sources. We also gained experience in training machine learning models for multi-factor assessments. On the frontend side, we learned more about how to build a responsive and intuitive interface for users, making complex risk calculations accessible and visually appealing. Lastly, we learned how critical it is to build a robust backend to ensure that the user experience is smooth and responsive.

What's next for Risk Calculator

We want to improve the user interface design to make it even more intuitive and visually appealing. This includes refining navigation elements, enhancing accessibility, and incorporating user feedback to ensure the tool meets users' needs effectively
