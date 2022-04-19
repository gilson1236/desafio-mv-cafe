package br.crudcolaborador.CRUDColaborador.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;
import java.util.Map;
import java.util.HashMap;

import br.crudcolaborador.CRUDColaborador.repository.ColaboradorRepository;
import br.crudcolaborador.CRUDColaborador.model.Colaborador;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/colaborador")
public class ColaboradorController {

	private final ColaboradorRepository colaboradorRepository;
	
	public ColaboradorController(ColaboradorRepository colaboradorRepository) {
		this.colaboradorRepository = colaboradorRepository;
	}
	
	@PostMapping()
	public void createColaborador(@RequestBody Colaborador colaborador) {
		this.colaboradorRepository.save(colaborador);
		
	}
	
	@GetMapping()
	public ResponseEntity<?> encontraColaboradores(){
		try {
			List<Colaborador> todosColaboradores = colaboradorRepository.findAll();
			if(todosColaboradores.isEmpty()) {
				//System.out.println("Lista Vazia!");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(todosColaboradores, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> encontrarColaboradorPorId(@PathVariable Integer id) {
		Optional<Colaborador> colaboradorEscolhido = colaboradorRepository.findById(id);
        if(colaboradorEscolhido.isPresent()){
            Colaborador colaboradorUnid = colaboradorEscolhido.get();
            return new ResponseEntity<>(colaboradorUnid, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/{id}")
    public ResponseEntity<?> updateColaborador(@PathVariable Integer id,
                                        @RequestBody Colaborador colaborador){
        Optional<Colaborador> colaboradorEncontrado = colaboradorRepository.findById(id);
        if(colaboradorEncontrado.isPresent() && id.equals(colaborador.getId())) {
        	this.colaboradorRepository.save(colaborador);
        	return new ResponseEntity<>(colaboradorEncontrado, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        
    }
	
	@DeleteMapping("/{id}")
    public Map<String, Boolean> deleteColaboradorPorId(@PathVariable Integer id){
        Colaborador colaborador = colaboradorRepository.findById(id)
        		.orElseThrow(); 
		
		colaboradorRepository.deleteById(colaborador.getId());
        
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);

        return response;
    }
}
