package com.example.backend.service.Interface;

import com.example.backend.entity.Chambre;
import com.example.backend.entity.Hotel;

import java.util.List;

public interface HotelService {
    public Hotel saveHotel(Hotel hotel);
    public Hotel updateHotel(Hotel hotel);
    public void deleteHotel(Hotel hotel);
    public Hotel getHotel(Long id);
/*
    public List<Chambre> getChambres(Hotel hotel);
*/
}
