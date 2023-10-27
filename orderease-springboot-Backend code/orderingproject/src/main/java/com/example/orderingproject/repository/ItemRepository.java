package com.example.orderingproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.orderingproject.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
