<?php 

namespace App;

class Human
{
	private $first_name;

	private $last_name;

	public function __construct($first_name, $last_name)
	{
		$this->first_name = $first_name;
		$this->last_name = $last_name;
	}

	public function getName()
	{
		return $this->first_name . " " . $this->last_name;
	}

	public function prettyName()
	{
		return "My name is " . $this->getName();
	}
}