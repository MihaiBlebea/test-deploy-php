<?php

namespace Test\Unit;

use PHPUnit\Framework\TestCase;
use App\Human;

class HumanTest extends TestCase
{
	public $human;

	public function setUp()
	{	
		$this->human = new Human("Bob", "Paris");
	}

	public function testHumanName()
	{
		$this->assertEquals($this->human->getName(), "Bob Paris");
	}

	public function testHumanPrettyName()
	{
		$this->assertEquals($this->human->prettyName(), "My name is Bob Paris");
	}
}