package com.example.backend.service.Implementation;

import com.example.backend.entity.Chambre;
import com.example.backend.repository.ChambreRepo;
import com.example.backend.service.Interface.ChambreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChambreServiceImp implements ChambreService {
    ChambreRepo chambreRepo;

    public ChambreServiceImp(ChambreRepo chambreRepo) {
        this.chambreRepo = chambreRepo;
    }

    @Override
    public Chambre addChambre(Chambre chambre) {
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
}
