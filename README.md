## How to run

  This application requires node >= 20.10.0

  To install - `npm install`

  To start - `npm run dev`

  To run test - `npm test`


## Approach

Below is a step by step approach how I performed the assignment

### Step 0: Analyze the Task
I started by visiting the UC website to get a good understanding of its functionality and features. To explore the available APIs, I examined the request and response for the following API calls:

- https://www1.minuc.se/frontendapi/getmenu
- https://www1.minuc.se/forlustanmalan?expand=*
By analyzing these calls, I could understand their structure and the data they return. This analysis also helped me identify the backend technologies in use, which was crucial for planning my approach.

When I found that the API call to https://www1.minuc.se/forlustanmalan?expand=* returned limited data, I realized that additional API calls were necessary. To identify the correct API URL, I had to debug the source maps, which involved inspecting network traffic and source code. Through this process, I discovered that the API uses the Optimizely content delivery API. This discovery provided valuable insights into how the content is managed and delivered.

### Step 1: Rendering the Menu
I created the top menu by making an API call to https://www1.minuc.se/frontendapi/getmenu, which provided the necessary menu information. After that, I adjusted the style of both the main menu and its dropdown menu to match the current design of the website.

### Step 2: Rendering the Content
As descripted in the assignment I started by making a GET call to https://www1.minuc.se/forlustanmalan?expand=* which recieved the website's content. After this, I went over purly on the ContentDeliveryAPI by retriving its associated child IDs. These IDs were then used to make further API calls through a child component, which is recursively calling itself to handle additional child content areas that optimizly administrator has added. I implemented limit the contentArea rendered, shortcut, which allowed me to spend time on other parts. I made a ContentComponent configurable so each child component can render certain areas. Based on the ContentArea, a different style component will be rendered. For the ContentDeliveryAPI I choosed to use the library @episerver/content-delivery. 

### Step 3: Add tests
Added tests for the steps above, choosed to use vitest and vi(mocking) because it is said to have great compatibility with vite.
Im new to vitest and mostly worked with jest.

## Challenges
Here is a list of challenges i faced during the assignment:
- I choosed to use Vue.js but im more used to work with React. This required me do some additional syntax lookups.
- Style component library, I decided to use a style component library that I’m familiar with, bootstrap. React boostrap has styled components, but there variant for vue (boostrap-vue) was not supported on vue 3+. Hence I went with purse bootstrap (non styled components) due to time constraint.
- I encountered an issue where my calls to the child APIs were returned as HTML and not in JSON format. I resolved this by adding removing the accept-language http request header (proxyReq.removeHeader('accept-language')) to my vite.config.js.
- I realized that the API call ( https://www1.minuc.se/forlustanmalan?expand=*) did not contain complete data, and additional api calls were required to render the page. Following this request and debugging the source map at www1.minus.se made me relatize the base url to the content delivery api.
- Early in the investigation phase, I realized that I have to make great limitations on what I was about to develop due to the short timeline.
- The dynamic approach of rendering child compontens vs a more static approach was costing time, letting down the quality of other things such as UX, test and error handling, and based on the structure in optimizly it might be harder to maintain vs a more simple approach.    

## Potential improvements

Some improvements that can be made are:

- The styled components can take in styling props. In example on the forlustanmalan page, we can send in both the ContentAreas and the styling props that will be used to render the content areas for this page.
- The Responsive design is not so good 
- The content is jumping when loading in, having a spinner och making sure the content is fully would be good
- More validation and errorhandling on certain components, such as validating props and api responses.
- Supporting more types of contentAreas inside the forlustanmalan page.
- Because this solution is very dynamic in its nature, it would be interesting to communication with the administrator to come up with some common structures for the content areas.
- Adding more and better unittests tests.
- Vuetify or a style component library like vue boostrap instead of only boostrap
- Change from javascript to typescript to make it more typesafe