package com.example.backend.controller;
import com.example.backend.entity.Hotel;
import com.example.backend.service.Implementation.HotelServiceImp;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/hotels")
public class HotelController {
    HotelServiceImp hotelServiceImp;
    public HotelController(HotelServiceImp hotelServiceImp) {
        this.hotelServiceImp = hotelServiceImp;
    }
    @GetMapping
    public List<Hotel> getAllHotels(){
        return hotelServiceImp.getAllHotels();
    }
    @PostMapping
    public Hotel saveHotel( @RequestBody Hotel hotel){
        return hotelServiceImp.saveHotel(hotel);
    }
    @GetMapping("/approved/{approved}")
    public List<Hotel> getHotelsByApproved( @PathVariable("approved") boolean approved){
        return hotelServiceImp.getHotelsByApproved(approved);
    }
}