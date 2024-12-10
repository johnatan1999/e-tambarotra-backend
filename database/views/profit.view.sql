create view ProfitView (
    select
        products.id as product_id,
        products.name as product_name,
        products.business_id as business_id,
        (unit_price-purchase_price) as profit_per_product,
        quantity as order_quantity,
        orders.created_at as order_date
    from orders
    join order_items on orders.id = order_items.order_id
    join products on order_items.product_id = products.id
);