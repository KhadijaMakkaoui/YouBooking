package com.example.backend.service.Interface;

import com.example.backend.entity.Chambre;

import java.util.List;

public interface ChambreService {
    public Chambre addChambre(Chambre chambre, Long hotelId);
    public Chambre updateChambre(Chambre chambre);
    public Chambre getChambreById(Long id);
    public void deleteChambre(Long id);
    public List<Chambre> getAllChambres();
    public List<Chambre> getChambresByHotel(Long id);
}
