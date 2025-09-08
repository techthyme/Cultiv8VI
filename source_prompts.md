
in the virgin islands the cost of food is skyrocketing. im building a two sided marketplace for farmers and consumers buy and sell from each other. help me build out the architecture for this application. i would like to use nextjs and tailwindcdss. create the tech stack that you think we would need to implement.


Ok. we're going to focus on the following user stories. 
* farmers should be able to create an account 
* farmers should be able to create farms
* farmers should be able to add products to their farm

## teck stack
* nextjs with tailwind and typescript
* prisma (+sqlite for initial dev and testing)
* supabase (after local testing is good to go
* nextjs api routes for the backend
* nextjs auth

## data types
Person
* email
* phone
* name
* full_name
* created_at

Farm
* id
* name
* owner :Person
* description
* location :Location

Location
* street
* town
* city
* state
* postal_code
* lat
* lng
Product
id: UUID farmer_id: UUID (FK) name: string description: text category: enum price_per_unit: decimal unit_type: enum (lb, kg, bunch, dozen, etc.) available_quantity: integer harvest_date: date? images: string[] is_organic: boolean is_active: boolean created_at: timestamp