export enum Role {
  Admin = 'ADMIN',
  Employee = 'EMPLOYEE',
  Shipper = 'SHIPPER',
  Branch = 'BRANCH',
}

export enum OrderStatus {
  Created = 'CREATED',
  Approved = 'APPROVED',
  Packaged = 'PACKAGED',
  Started = 'STARTED',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Returned = 'RETURNED',
}

export enum Payment {
  Cash = 'CASH',
  Banking = 'BANKING',
}

export enum DashboardType {
  OrdersDaily = 'orders_daily',
  NewUser = 'new_user',
  RevenueDaily = 'revenue_daily',
  HotSelling = 'hot_selling',
}
