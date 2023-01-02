package com.example.backend.repository;

import com.example.backend.entity.Chambre;
import com.example.backend.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, Long> {
    public List<Hotel> getHotelsByApproved(boolean approved);


}
