package br.crudcolaborador.CRUDColaborador.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.crudcolaborador.CRUDColaborador.model.Colaborador;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Integer>{
	
}
