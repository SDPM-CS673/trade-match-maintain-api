# Team 3 - Market Order Book, Trade matching
This microservice provides a stub for a market (or an exchange). This will provide remaining services which are critical for a functioning trading platform.

**Team Members** 
---------------------------------------------------------------------------------------------------------------------------


Mona Shaban - Business Analyst \
Srushthi Thakre - UI/UX Developer \
Revanth Guntupalli - Microservice Developer \
Niharika Jamble - Database Design \
Mohammed Hannan Desai - Devops & Testing

**Far Vision** 
---------------------------------------------------------------------------------------------------------------------------


The far vision for the product is to create an efficient trading platform to empower sellers and buyers to interact in the marketplace to buy and sell office commodities. The purpose of this trading system is to provide real time visibility, promote transparency, and control the market dynamics to allow for efficient trade execution. The key components of the vision is to display all of the sell and buy orders that are placed on the platform as well as the market depth that provides live quantities available with the current prices. This will allow the users to make sensible decisions before conducting their trade. Another key component is the trade matching feature which will automatically match the seller and buyers to each other based on the quantity and price desired. This will allow for seamless trade processes without causing discrepancies or delays in the orders. The long term goals of the product are to expand the platform’s global reach to a wider audience in various office supply markets and regions.

**Near Vision**
---------------------------------------------------------------------------------------------------------------------------

The near vision for this trading platform could focus on establishing a strong foundation with essential features that deliver immediate value to early users. Here’s a potential outline:

- Buy/Sell Order Placement: Enable users to seamlessly place and manage buy and sell orders for office commodities on the platform. This will establish the core trading functionality early on.

- Real-Time Market Display: Provide users with a dynamic, real-time display of all active buy and sell orders, showing quantities and prices. This helps in promoting transparency and aids users in making informed decisions.

- Basic Trade Matching Feature: Implement an initial version of the trade matching system to automatically pair buyers and sellers based on price and quantity. This feature will ensure efficient trade execution, helping minimize delays and discrepancies.

- Market Depth Visualization: Introduce a feature to display market depth, showing users the available quantities and prices at different levels. This will give a clear view of market dynamics, helping users plan their trades better.

- Limited Market Launch: Focus the platform’s initial rollout on a specific region or a narrow commodity segment to test functionality, gather feedback, and improve the system before expanding globally.

- Basic User Interaction Tools: Offer essential tools for users to track orders, view transaction history, and analyze basic market trends, ensuring they have control over their trades and decisions.

**Stakeholder Types**
---------------------------------------------------------------------------------------------------------------------------

1. **Market Operators**: Market operators are responsible for managing the trading infrastructure of an exchange. They ensure that the platform functions smoothly, facilitating efficient trade matching and maintaining the order book. Their role also includes ensuring compliance with regulations and providing a transparent trading environment for all participants.

2. **Traders**: Traders are individuals or entities actively engaged in buying and selling financial instruments within the market. They rely on the trading platform for timely execution of their orders, access to real-time market data, and analytical tools to inform their trading strategies. Their primary goal is to maximize profits through effective trading decisions.

3. **Buyers**: Buyers are participants in the market looking to purchase financial instruments, such as stocks, commodities, or cryptocurrencies. They seek a user-friendly platform that allows them to execute orders efficiently and provides transparent pricing information. Buyers rely on the trading system to help them make informed investment decisions and achieve their financial objectives.

**User Persona**
---------------------------------------------------------------------------------------------------------------------------

#### User Persona: Trader

 Name: Mahesh Babu\
 Age: 32\
 Occupation: Independent Trader\
 Experience: 8 years in financial trading, specializing in equities and options trading
  
#### Goals:
- Execute trades quickly and efficiently to capitalize on market movements.
- Access real-time market data and analytics to make informed trading decisions.
- Minimize transaction costs and maximize profitability through strategic trading.
- Stay updated on market news and trends to anticipate price movements.

#### Pain Points:
- Frustration with slow order execution times, leading to missed opportunities.
- Difficulty in navigating complex trading platforms with excessive features.
- Lack of transparency in fees and commissions, impacting overall profitability.
- Challenges in analyzing multiple data sources and indicators simultaneously.

#### Motivations:
- Desire for financial independence and the ability to generate substantial income through trading.
- Interest in leveraging advanced trading tools and technology to gain a competitive edge.
- Motivation to continuously improve trading strategies and performance through education and practice.

#### Technology Proficiency:
- High; comfortable using trading platforms, financial analysis software, and mobile trading apps.
- Familiar with various order types (limit, market, stop-loss) and trading strategies (scalping, swing trading).

#### Tools Preferred:
- Advanced trading platforms with real-time data feeds and charting tools.
- Mobile trading apps for on-the-go access to market information.
- Analytical tools for tracking performance and backtesting strategies.

#### Day-to-Day Activities:
- Monitoring market conditions and relevant news throughout the trading day.
- Placing buy and sell orders based on technical analysis and market trends.
- Reviewing and adjusting trading strategies based on performance and market shifts.
- Participating in online trading communities for insights and sharing experiences. 


**Product Backlog Items as User Stories:**
---------------------------------------------------------------------------------------------------------------------------

*FRONT-END:*

1. Real-Time Order Book Display
   As a trader, 
   I want to view a real-time order book that displays all active buy and sell orders,so that I can make informed decisions 
   based on the current market conditions.

   Acceptance Criteria:
   - The order book updates automatically without a page reload.
   - Buy orders are highlighted in green, and sell orders in red.
   - I can filter orders by price range, quantity, and time of entry.
   - The interface is responsive and accessible on both desktop and mobile devices.

2. Trade Matching Notifications
   As a user, 
   I want to receive notifications when my orders are matched or partially matched,so that I can stay informed about the 
   status of my trades without having to constantly check the order book.

   Acceptance Criteria:
    - Notifications appear in a dedicated area or as non-intrusive pop-up messages.
    - I can customize my notification settings (sound, duration, type).
    - Notifications include details such as matched order price, quantity, and timestamp.
    - A log of recent notifications is available for my reference.

 3. User-Friendly Trade Execution Interface
    As a trader, 
    I want an intuitive interface for executing trades based on the order book  information,so that I can quickly and 
    accurately place my buy or sell orders without confusion.

    Acceptance Criteria:
     - The interface allows me to input buy or sell orders with clearly labeled fields for price and quantity.
     - A visual representation of market depth updates dynamically as I adjust my orders.
     - I receive instant feedback upon submitting an order, indicating whether it was successful or  failed.
     - A confirmation dialog appears before finalizing trades to prevent accidental submissions.
   
---------------------------------------------------------------------------------------------------------------------------
  **Estimated PBIs in story points:**
  *FRONT-END:*

  1. Real-Time Order Book Display - 8 story points
  2. Trade Matching Notifications - 5 story points
  3. User-Friendly Trade Execution Interface - 8 story points


