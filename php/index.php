<?php
Class Pessoa{
    private $nome;
    private $idade;
    private $email;
    private $corFavorita;

    public function __construct(
        $nome, 
        $idade, 
        $email, 
        $corFavorita){
            $this ->nome = $nome;
            $this ->idade = $idade;
            $this ->email = $email;
            $this ->corFavorita = $corFavorita;
    }

    public function pegarNome(){
        return $this -> nome
    }

    public function pegarIdade(){
        return $this -> idade
    }

    public function pegarEmail(){
        return $this -> email
    }

    public function pegarcorFavorita(){
        return $this -> corFavorita
    }

     public function apresentar(){
        return "Olá meu nome é{$this -> nome}, tenho {$this -> idade} anos, meu email é {$this-> email}, minha cor favorita é {$this-> corFavorita}"
     }
}

$usuario = new Pessoa("Gabriel Kewryghan Marinho Moura Rosas",20,"g.rosas@aluno.senai.br","rosa")
echo $usuario->apresentar();


?>