package com.example.orderingproject.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.orderingproject.entity.Order;
import com.example.orderingproject.repository.OrderRepository;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public Order confirmOrder(@RequestBody List<Order> orders) {
        // Save the orders to the database
        double totalAmount = orders.stream().mapToDouble(order -> order.getTotal()).sum();
        System.out.println("Total Amount: " + totalAmount);
        orderRepository.saveAll(orders);
        return orders.get(0); // Return the first order as an example
    }
}
