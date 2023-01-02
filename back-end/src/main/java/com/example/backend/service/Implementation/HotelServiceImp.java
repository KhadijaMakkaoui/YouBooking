package com.example.backend.service.Implementation;

import com.example.backend.entity.Chambre;
import com.example.backend.entity.Hotel;
import com.example.backend.repository.HotelRepo;
import com.example.backend.service.Interface.HotelService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImp  implements HotelService {
    HotelRepo hotelRepo;

    public HotelServiceImp(HotelRepo hotelRepo) {
        this.hotelRepo = hotelRepo;
    }

    @Override
    public Hotel saveHotel(Hotel hotel) {

        return hotelRepo.save(hotel);
    }

    @Override
    public Hotel updateHotel(Hotel hotel) {
        return hotelRepo.save(hotel);
    }

    @Override
    public void deleteHotel(Hotel hotel) {
        hotelRepo.delete(hotel);

    }

    @Override
    public Hotel getById(Long id) {
        return hotelRepo.findById(id).orElse(null);
    }

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepo.findAll();
    }

    @Override
    public List<Hotel> getHotelsByApproved(boolean approved) {
        return hotelRepo.getHotelsByApproved(approved);
    }

   /* @Override
    public List<Chambre> getChambres(Hotel hotel) {
        return hotelRepo.getChambres(hotel);
    }*/
}
