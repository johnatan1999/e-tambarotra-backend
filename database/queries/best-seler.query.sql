SELECT p.id             AS product_id,
       p.name           AS product_name,
       SUM(oi.quantity) AS total_sold
FROM products p
         JOIN order_items oi ON p.id = oi.product_id
         JOIN orders o ON oi.order_id = o.id
WHERE o.created_at >= DATE('now', '-30 days') -- Last 30 days
GROUP BY p.id
ORDER BY total_sold DESC
LIMIT 5