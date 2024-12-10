import CustomersPage from '@/app/(inventory)/customers/page';
import LocationsPage from '@/app/(inventory)/locations/page';
import ProductsPage from '@/app/(inventory)/products/page';
import GroupsPage from '@/app/(inventory)/groups/page';
import UnitsPage from '@/app/(inventory)/units/page';
import FacilitiesPage from '@/app/(inventory)/facilities/page';
import DemandsPage from '@/app/(inventory)/demands/page';
import PeriodsPage from '@/app/(inventory)/periods/page';
import VehicleTypesPage from '@/app/(inventory)/vehicleTypes/page';
import CogLocationsPage from '@/app/(inventory)/coglocations/page';
import DemandByDistancePage from '@/app/(inventory)/demandfulfillment/page';
// import DistanceByDemandPage from '@/app/(inventory)/distancebydemands/page';
import ProductFlowsPage from '@/app/(inventory)/productflows/page';

export const allTables = [
  {
    id: '0000001',
    name: 'ProductFlow',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <ProductFlowsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000002',
    name: 'New Site Location',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <CogLocationsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000003',
    name: 'Distance covered by Location',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <CogLocationsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000004',
    name: 'Demand Covered by Distance',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <DemandByDistancePage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000005',
    name: 'Customers',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },

  {
    id: '0000019',
    name: 'Locations',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'The Locations table contains information on locations of all sites involved in your supply chain: customers, DCs, factories and suppliers.',
    dataTable: <LocationsPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000008',
    name: 'DCs and Factories',
    email: 'alicesmith@example.com',
    subject: 'Re: Project Update',
    text: 'Production and storing facilities are the integral components of every supply chain. This table is used to specify distribution centers and factories that comprise your supply chain. Data for this table can be collected automatically from the results of the COG experiment or inserted manually for each DC/factory that you create.To define the involved costs, refer to the Facility expenses table (available in the NET and SIM scenario types).',
    dataTable: <FacilitiesPage />,
    date: '2023-10-22T10:30:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000009',
    name: 'Demand',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: "Customers of your supply chain order products in accordance with their demand. In the Demand table you define the mechanism of how the customer's demand for the product is formed.\n\n By default demand is generated on the first day of the first period. In the following cases demand will be automatically set to Next day after interval:\n\n The imported scenario was created in the older version \n\n The outdated database is updated to the new version. This affects all scenarios of this project.",
    dataTable: <DemandsPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000036',
    name: 'Products',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'In the Products table you enter information about products that are delivered within your supply chain.',
    dataTable: <ProductsPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000027',
    name: 'Periods',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'The periods specified in this table are used throughout the current scenario deNETting certain time frames that alter scenario in this or that way. For convenience, period groups can be created, if required.\n\n Every scenario contains one period by default. This period defines the start and the end of the scenario, and since it is currently the only available period, it defines the duration of the experiments.\n\n If more than one period is created (there can be NET gaps between the defined periods), you will NETtice that the end date of the first period (as well as of every other period but the last one) is NETt editable. These periods comprise one total period of time with one ending date, defined by the last period of the table. The end of the Intermediate periods precedes the start of the forthcoming periods, i.e., the next period starts when the current period ends.',
    dataTable: <PeriodsPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000014',
    name: 'Groups',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'A group aggregates multiple sites of the supply chain. If you have multiple sites that are handled in the same way in aNETther table and you do NETt want to create multiple entries defining exactly the same policy for them, you can aggregate these sites in a group.\n\n E.g. You have three customers that use the same sourcing policy. Instead of creating a separate entry for each customer in the Sourcing table, you can create a group containing these customers, and define a single entry referring to this group. \n\n Groups can be created manually by the user or automatically as the result of the experiment run. \n\n E.g. COG experiment result suggests that you should create two DCs (DC1 and DC2). In this case, the system automatically arranges all the available customers into two groups (DC1 Customers and DC2 Customers) and generate the corresponding sourcing policies for these groups.\n\n The names of the groups in the table cells and drop-down lists are put in brackets to visually distinguish them from the names of the single objects.',
    dataTable: <GroupsPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'SIM']
  },
  {
    id: '0000045',
    name: 'Units',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'The Units table is used to create custom measurement units of weight and volume that will be used exclusively within the current scenario. These units may override the units specified in the Units section of anyLogistix settings.\n\n Once you have created a new unit in this table, you must navigate to the Unit Conversions table to define the conversions of this unit.',
    dataTable: <UnitsPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000047',
    name: 'Vehicle Types',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'In the Vehicle Types table you define all types of vehicles that are used to ship products in the supply chain. The default vehicle type is created with infinite capacity for each new scenario.\n\n ',
    dataTable: <VehicleTypesPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000020',
    name: 'Location Groups',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'The Location Groups table contains one or more user-defined locations from the Locations table. Location groups are used to simplify the definition of custom Paths: instead of creating one entry for each individual location, you create a location group and define a single entry for it.\n\n NETte the difference between location groups and groups. Location groups contain physical points on the map and have flat structure (i.e., a location group canNETt contain other location groups). Groups aggregate logical entities of your supply chain (customers, sites, suppliers and other groups) and can have a tree-like structure (i.e., a group can contain other groups).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000001',
    name: 'Assets Constraints',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'This table is used within the Network Optimization experiment only. It allows you to define the range limiting the desired number of sites in your supply chain. The experiment will use this data to find the optimal number of sites (or supersites) and their locations.',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000002',
    name: 'BOM',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'This table is used within the Network Optimization and Simulation experiments only.A BOM is a list of components and their quantities needed to produce the end product. The BOM table allows you to create and work with Bills of Materials (or simply BOMs).',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000003',
    name: 'CO2 from Facilities',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'This table is used within the Network Optimization and Simulation experiments only. The table contains data on the CO2 emissions for each facility of the supply chain you are designing.The CO2 Emissions statistics contain the data the experiment gathered using this table.',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000004',
    name: 'CO2 from Processing',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'This table is used within the Network Optimization and Simulation experiments only. Product processing within the supply chain results in certain volume of CO2 emissions. In the CO2 from Processing table, you define policies for calculating the amount of CO2 that will be produced while processing products. Product processing policy is set on the facility level and is applied based on the product and operation direction (inbound or outbound).',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000005',
    name: 'Cash Accounts',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'This table is used within the Simulation type of experiments only. It contains data on cash flows of the facilities in your supply chain. A cash account contains the initial cash of a facility (several facilities or a group of facilities) can spend, i.e., their cash on hand that can be spent on purchasing, processing and selling raw materials.\n\n The data from this and Payment Terms tables is used to collect Cash to Serve statistics, which allow you to analyze the amount of cash required for this supply chain to function properly.',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['SIM']
  },
  {
    id: '0000006',
    name: 'Custom Constraints',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'This table is used within the Network Optimization experiment only. It is used to set conditions for the existing Product flows, Product storages and Production constraints by comparing the values to each other or to the constants created and defined here. The experiment does NETt consider the result of the expression if it does NETt satisfy the defined conditions.\n\n Custom constraints work as an expression with its left side value compared to the right side value per specified type of comparison.',
    dataTable: <CustomersPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET']
  },

  {
    id: '0000010',
    name: 'Demand Forecast',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Simulation experiment only. It allows you to estimate expected customer demand for certain products over the specified period of time. The table uses periodic or historic data for demand forecasting.\n\n In contrast to the Demand table, the record in this table can be applied to a customer (to work with the data on placed orders of a single customer) or a site (representing aggregation of all placed orders).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['SIM']
  },
  {
    id: '0000011',
    name: 'Events',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments only (i.e., Simulation, Variation, Comparison, Safety Stock Estimation, and Risk Analysis). It is used to define events (applicable to customers, DCs and factories) that will affect the data of the scenario during runtime.\n\n Simple events, which are triggered according to the schedule you provide.\n\n Chained events, which are triggered in sequences.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000012',
    name: 'Facility Expenses',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'Production and storing facilities are the integral components of every supply chain. This table contains data on the expenses for each site. This data helps to optimize the expenses of supply chain components and their number (refers to NET experiment only).\n\n Such results can be obtained by running the corresponding experiment, which will use the data from this table (as well from other anyLogistix tables containing the required data) to provide the optimal solution in terms of required conditions.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000013',
    name: 'Fleets',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments (Simulation, Variation, Comparison, Safety Stock Estimation, Risk Analysis).\n\n This table allows you to assign a certain vehicle type (as well as the quantity of vehicles of this type) to a site (DC or Factory) that will be using them to deliver products to its customers \n\n A site has infinite number of vehicles, i.e., there is always a vacant truck to deliver a shipment.\n\n The vehicles that have delivered their shipments do NETt return to the positioning site, they simply disappear.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },

  {
    id: '0000015',
    name: 'Indicator Constraints',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization experiment only. It uses the existing Linear Ranges (which set conditions for Custom Constraints, Product flows, Product storages, and Production Constraints) to define the If and Then statements in the corresponding columns.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000016',
    name: 'Inventory',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments only (i.e., Simulation, Variation, Comparison, Safety Stock Estimation, and Risk Analysis). In the Inventory table you define inventory policies for your supply chain facilities.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000017',
    name: 'Linear Ranges',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization experiment only.\n\n Each record of this table is a condition that will be used by the Indicator Constraints table as an If or Then statement. \n\n To create a linear range you must define: \n\n Name of the new expression \n\n Expression itself \n\n The boundaries the expression must NETt violate',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000018',
    name: 'Loading and Unloading Gates',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'Every facility has its loading and unloading gates that arriving/departing trucks visit. The process of loading/unloading occupies certain time, which results in time delay that needs to be considered in a supply chain. Use this table to simulate the actual delay by creating the required number of loading/unloading gates at the required facility of your supply chain.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },

  {
    id: '0000021',
    name: 'Milk Runs',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments (i.e., Simulation, Variation, Comparison, Safety Stock Estimation, Risk Analysis).\n\n This table allows you to form a succession of destination points (customers) that will be served in a certain order, allowing a truck to fetch orders for a number of destination points. Once the final destination point of the milk run has been served, the truck will head to the positioning site (DC or factory).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000022',
    name: 'Objective Members',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization experiment only. It is used to set members of the objective function by specifying coefficient for the existing Custom Constraints, Product flows, Product storages and Production constraints.\n\n The resulting value of the expressions will be available in the Objective Members statistics of the NET experiment results and you will be able to compare it to the experiment results.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000023',
    name: 'Ordering Rules',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments only (i.e., Simulation, Variation, Comparison, Safety Stock Estimation, and Risk Analysis).\n\n Certain source sites of your supply chain may offer a product in batches. The batch size is a certain limit of the product amount that can be ordered from the source site (defined in the Sale Batch table). The batch size does NETt necessarily correspond to the amount of products required by the destination (defined by the destination Inventory policy). Ordering rules allow you to vary the required amount value within the specified Limit, units so that it corresponds to the sale batch size.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000024',
    name: 'Paths',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'A path connects location points within your supply chain, allowing a product to be transported from one location to aNETther.\n\n Paths are unidirectional. To define a path for the reverse travel direction, you must create a new table entry.\n\n A pair of locations within your supply chain can be connected by multiple paths. \n\n The defined connections may NETt be shown on the GIS map for the following reasons. \n\n Paths can be created manually or automatically.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000025',
    name: 'Payment Terms',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Simulation type of experiments only. It contains data on cash flow directions: the source of the flow, its destination and the terms the payment is made on.\n\n The data from this and Cash Accounts tables is used to collect Cash to Serve statistics, which allow you to analyze the amount of cash required for this supply chain to work properly.\n\n Use DCs and Factories table to specify distribution centers and factories that comprise your supply chain.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000026',
    name: 'Period Groups',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'The Period groups table aggregates multiple periods (previously defined in the Periods table) into one entry thus preventing a user from creating multiple entries for defining Demand Forecast as for instance.\n\n E.g. You have three periods that must be considered by the same demand. Instead of creating a separate entry in the table for each period, you can create a period group and define a single entry referring to this group.\n\n The names of the groups in the table cells and drop-down lists are put in brackets to visually distinguish them from the names of the single objects.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },

  {
    id: '0000028',
    name: 'Processing Cost',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is considered only by the Network optimization and Simulation-based experiments.\n\n Products within the supply chain are processed with certain costs.\n\n In the Processing Cost table, you define policies for calculating processing costs for products. Processing cost policy is set on the facility level and is applied based on the product, and operations direction (inbound or outbound).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000029',
    name: 'Processing Time',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is considered only by the SIM-based experiments.\n\n Orders and shipments within the supply chain are processed with certain time delays.\n\n In the Processing Time table, you define policies for calculating processing time for orders and shipments. Processing time policy is set on the facility level and is applied based on the product, performed operation (order or shipment) and operations direction (inbound or outbound).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000030',
    name: 'Product Flows',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization experiment only. It allows you to configure sourcing parameters.\n\n A site will NETt be considered by the experiment if NET product flow record is defined in this table.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000031',
    name: 'Product Groups',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'Product group aggregates multiple products (previously defined in the Products table) into one entry, which you define in the Product groups table. If you have multiple products that are handled in the same way in aNETther table and you do NETt want to create multiple entries defining exactly the same policy for them, you can aggregate these products in a product group.\n\nFor example, you have three products that are used in the same sourcing policy. Instead of creating a separate entry in the table for each product, you can create a product group and define a single entry referring to this group.\n\n The names of the groups in the table cells and drop-down lists are put in brackets to visually distinguish them from the names of the single objects.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000032',
    name: 'Product Storages',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization experiment only. It allows you to define the inventory stock parameters.\n\n Product(s) will NETt be shipped to/from a site (e.g. of DC type) unless the corresponding product storage record is defined in this table.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000033',
    name: 'Production (NET)',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization experiment only. It allows you to define the following production parameters:\n\n Product that will be produced by the specified facility/group of facilities.\n\n Production constraints that must be applied to a facility/group of facilities (valid within the specified period of time). \n\n Penalties for violating the specified constraints.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000034',
    name: 'Production (SIM)',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments only (i.e., Simulation, Variation, Comparison, Safety stock estimation, and Risk analysis).\n\n Inventory replenishment for a site is regulated by its inventory policy (defined in the Inventory table). For a DC, the required inventory is replenished by ordering the necessary product from a source in accordance with the Sourcing policy. For a Factory, the required inventory is replenished by producing the necessary product in accordance with the Production policy.\n\n ',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000035',
    name: 'Production Batch',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'Production sites within your supply chain may manufacture products in batches. This will reduce the production cost and the production time of a single product unit.\n\n In this table you define the production time and the cost of the production batch by specifying the required batch size with the price and production time for a single product unit.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },

  {
    id: '0000037',
    name: 'Site States Changes',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network Optimization and Simulation types of experiments only.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000038',
    name: 'Sale Batch',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the Network optimization and simulation-based experiments only (i.e., Simulation, Variation, Comparison, Safety stock estimation, and Risk analysis).\n\n Certain sites of your supply chain may offer discounts for wholesale purchases. In this table you define: \n\n Discount price per unit when ordering from a certain supplier (in case of NET scenario type). \n\n Discount price for the batch by specifying the required batch size and the price per product unit (in case of SIM scenario type).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000039',
    name: 'Shipping',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table is used within the simulation-based experiments only (Simulation, Variation, Comparison, Safety Stock Estimation, Risk Analysis).\n\n Shipping is NETt possible if NET Path is defined for the Source / Destination pair of objects. \n\n Properly defined shipping is required to visualize connections on the GIS map.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000040',
    name: 'Sourcing',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: '',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG']
  },
  {
    id: '0000041',
    name: 'Suppliers',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'This table allows you to specify product suppliers — external objects with infinite amount of any product in stock. We have NET control over this object, but we can gather its data for further analysis.\n\n The products selling price may be adjusted for the required objects.\n\n A Supplier may be used as a shadow object for a DC. This will allow the DC to have unlimited inventory (in case of NET scenario type).',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000042',
    name: 'Tariffs',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'Here you define the tax(es) to be paid for transporting the specified amount of products between the two objects located in different countries.\n\n The defined taxes are added to the Total Cost statistics, unless one of the objects is a customer. In this case the data will NETt be added to the Total Cost statistics, since the expenses are incurred by the customer.\n\n Statistics showing estimated taxes differ for the NET and SIM-based experiment types.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },
  {
    id: '0000043',
    name: 'Time windows',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: '	A customer, a site (DC or factory), a supplier, or a group of objects, for which the time windows are defined.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },
  {
    id: '0000044',
    name: 'Unit Conversions',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'The Unit Conversions table is used to create conversions for the user-defined measurement units (of weight, volume, pcs, and units previously created in the Units table) that will be used exclusively within the current scenario. This conversion refers to a specific product, and there can be only one unit conversion per table record.',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['NET']
  },

  {
    id: '0000046',
    name: 'Vehicle Selection Mode',
    email: 'bobjohnson@example.com',
    subject: 'Weekend Plans',
    text: 'If there is a number of Shipping policies that can be used to transfer the products between the two objects, you can use this table to check if the shipping with the required vehicle is chosen (Cheapest, Fastest, Closest fit, or By priority).\n\n ',
    dataTable: <CustomersPage />,
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['COG', 'NET', 'SIM']
  },

  {
    id: '0000048',
    name: 'Samuel Turner',
    email: 'samuelturner@example.com',
    subject: 'Weekend Hike',
    text: "Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.\n\nI've done some research and have a few routes in mind.\n\nLet me kNETw if you're interested, and we can plan the details.\n\n It's sure to be a memorable experience! Samuel",
    dataTable: <CustomersPage />,
    date: '2022-07-28T17:30:00',
    read: false,
    labels: ['personal']
  }
];

export type Mail = (typeof allTables)[number];
export const cogTables = [
  {
    id: '0000001',
    name: 'ProductFlow',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <GroupsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000002',
    name: 'New Site Location',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <LocationsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000003',
    name: 'Distance covered by Location',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <LocationsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  },
  {
    id: '0000004',
    name: 'Demand Covered by Distance',
    email: 'williamsmith@example.com',
    subject: 'Meeting Tomorrow',
    text: 'A customer is the final destination point of every product shipped from a DC / factory. Use this table to define the customers consuming the products of your supply chain.',
    dataTable: <LocationsPage />,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['NET', 'SIM']
  }
];
export type CogMail = (typeof cogTables)[number];

export const accounts = [
  {
    label: 'Alicia Koch',
    email: 'alicia@example.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@gmail.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@me.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com'
  },
  {
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com'
  },
  {
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com'
  },
  {
    name: 'NETah Martinez',
    email: 'NETah.martinez@example.com'
  },
  {
    name: 'Ava Taylor',
    email: 'ava.taylor@example.com'
  },
  {
    name: 'Lucas Brown',
    email: 'lucas.brown@example.com'
  },
  {
    name: 'Sophia Smith',
    email: 'sophia.smith@example.com'
  },
  {
    name: 'Ethan Wilson',
    email: 'ethan.wilson@example.com'
  },
  {
    name: 'Isabella Jackson',
    email: 'isabella.jackson@example.com'
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@example.com'
  },
  {
    name: 'Mason Lee',
    email: 'mason.lee@example.com'
  },
  {
    name: 'Layla Harris',
    email: 'layla.harris@example.com'
  },
  {
    name: 'William Anderson',
    email: 'william.anderson@example.com'
  },
  {
    name: 'Ella White',
    email: 'ella.white@example.com'
  },
  {
    name: 'James Thomas',
    email: 'james.thomas@example.com'
  },
  {
    name: 'Harper Lewis',
    email: 'harper.lewis@example.com'
  },
  {
    name: 'Benjamin Moore',
    email: 'benjamin.moore@example.com'
  },
  {
    name: 'Aria Hall',
    email: 'aria.hall@example.com'
  },
  {
    name: 'Henry Turner',
    email: 'henry.turner@example.com'
  },
  {
    name: 'Scarlett Adams',
    email: 'scarlett.adams@example.com'
  }
];

export type Contact = (typeof contacts)[number];
