<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert([
            ['staff' => 'Alicia Niedermaier', 'position' => 'Software Engineer', 'salary' => 102000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Bianca Spiegel', 'position' => 'Software Architect', 'salary' => 112000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Carl Meier', 'position' => 'Principal Software Engineer', 'salary' => 122000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Max Rutherford', 'position' => 'Software Tester', 'salary' => 99000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Dorothy Maier', 'position' => 'Finance Officer', 'salary' => 100000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Jack Smith', 'position' => 'Legal Officer', 'salary' => 102000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Alan Birkbeck', 'position' => 'Operation Manager', 'salary' => 132000, 'created_at' => now(), 'updated_at' => now()],
            ['staff' => 'Janet Steinmann', 'position' => 'Program Manager', 'salary' => 132000, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
