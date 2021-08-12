### Small GraphQL server for Ancient Gaming interview.
- To run the server:
    1. `npm i`
    2. `npm start`

### DB Config
1. Execute in your Postgre server the sql scripts.
2. Rename the `example.env` file to `.env` and update with your credentials/data.

### Notes
- I took the liberty to add the payout to the bet mutation since I thought it was missing in the test description.
- I know I didn't use sequelize but as I wasn't sure I was able to do everything I sticked to old fashion queries.
