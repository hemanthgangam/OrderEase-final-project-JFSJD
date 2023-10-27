package com.example.orderingproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.orderingproject.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}

