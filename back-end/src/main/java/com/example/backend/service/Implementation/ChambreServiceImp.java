package com.example.backend.service.Implementation;

import com.example.backend.entity.Chambre;
import com.example.backend.entity.Hotel;
import com.example.backend.repository.ChambreRepo;
import com.example.backend.service.Interface.ChambreService;
import com.example.backend.service.Interface.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChambreServiceImp implements ChambreService {
    ChambreRepo chambreRepo;
    @Autowired
    HotelService hotelService;
    Hotel hotel;

    public ChambreServiceImp(ChambreRepo chambreRepo) {
        this.chambreRepo = chambreRepo;
    }

    @Override
    public Chambre addChambre(Chambre chambre, Long hotelId) {
        hotel= hotelService.getById(hotelId);
        //check if the hotel is owned by the current user
        chambre.setHotel(hotel);
        return chambreRepo.save(chambre);
    }

    @Override
    public Chambre updateChambre(Chambre chambre) {
        return chambreRepo.save(chambre);
    }

    @Override
    public Chambre getChambreById(Long id) {
        return chambreRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteChambre(Long id) {
        chambreRepo.deleteById(id);
    }

    @Override
    public List<Chambre> getAllChambres() {
        return chambreRepo.findAll();
    }

    public List<Chambre> getChambresByHotel(Long id) {
        return chambreRepo.getChambreByHotel(hotelService.getById(id));
    }
    public Chambre getFirstChambreByHotel(Hotel hotel) {
        return chambreRepo.findFirstByDisponibleTrueAndHotelId(hotel.getId());
    }
}
