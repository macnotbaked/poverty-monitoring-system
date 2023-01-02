<?php
class RecommendedPrograms
{

    public $connection;
    public $tblHouseholdProgram;
    public $tblIncomeProgram;
    public $tblPopulationProgram;
    public $tblUnemploymentProgram;

    public $tblHouseholdCriteria;
    public $tblIncomeCriteria;
    public $tblPopulationCriteria;
    public $tblUnemploymentCriteria;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHouseholdProgram = "pms_household_programs";
        $this->tblIncomeProgram = "pms_income_programs";
        $this->tblPopulationProgram = "pms_population_programs";
        $this->tblUnemploymentProgram = "pms_unemployment_programs";

        $this->tblHouseholdCriteria = "pms_household_criteria";
        $this->tblIncomeCriteria = "pms_income_criteria";
        $this->tblPopulationCriteria = "pms_population_criteria";
        $this->tblUnemploymentCriteria = "pms_unemployment_criteria";
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblHouseholdProgram} as household, ";
        $sql .= "{$this->tblIncomeProgram} as income, ";
        $sql .= "{$this->tblPopulationProgram} as population, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment, ";
        $sql .= "{$this->tblHouseholdCriteria} as criteriaHousehold, ";
        $sql .= "{$this->tblIncomeCriteria} as criteriaIncome, ";
        $sql .= "{$this->tblPopulationCriteria} as criteriaPopulation, ";
        $sql .= "{$this->tblUnemploymentCriteria} as criteriaUnemployment ";
        // $sql .= "where household.household_program_is_active = 1 ";
        // $sql .= "and income.income_program_is_active = 1 ";
        // $sql .= "and population.population_program_is_active = 1 ";
        // $sql .= "and unemployment.unemployment_program_is_active = 1 ";
        // $sql .= "and criteriaHousehold.household_criteria_is_active = 1 ";
        // $sql .= "and criteriaIncome.income_criteria_is_active = 1 ";
        // $sql .= "and criteriaPopulation.population_criteria_is_active = 1 ";
        // $sql .= "and criteriaUnemployment.unemployment_criteria_is_active = 1 ";
        $sql .= "where criteriaHousehold.household_criteria_program_id = household.household_program_aid ";
        $sql .= "and criteriaIncome.income_criteria_program_id = income.income_program_aid ";
        $sql .= "and criteriaPopulation.population_criteria_program_id = population.population_program_aid ";
        $sql .= "and criteriaUnemployment.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by household.household_program_aid, ";
        $sql .= "income.income_program_aid, ";
        $sql .= "population.population_program_aid, ";
        $sql .= "unemployment.unemployment_program_aid ";

        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimit($start, $total)
    {
        $sql = "select * from {$this->tblHouseholdProgram} as household, ";
        $sql .= "{$this->tblIncomeProgram} as income, ";
        $sql .= "{$this->tblPopulationProgram} as population, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment, ";
        $sql .= "{$this->tblHouseholdCriteria} as criteriaHousehold, ";
        $sql .= "{$this->tblIncomeCriteria} as criteriaIncome, ";
        $sql .= "{$this->tblPopulationCriteria} as criteriaPopulation, ";
        $sql .= "{$this->tblUnemploymentCriteria} as criteriaUnemployment ";
        // $sql .= "where household.household_program_is_active = 1 ";
        // $sql .= "and income.income_program_is_active = 1 ";
        // $sql .= "and population.population_program_is_active = 1 ";
        // $sql .= "and unemployment.unemployment_program_is_active = 1 ";
        // $sql .= "and criteriaHousehold.household_criteria_is_active = 1 ";
        // $sql .= "and criteriaIncome.income_criteria_is_active = 1 ";
        // $sql .= "and criteriaPopulation.population_criteria_is_active = 1 ";
        // $sql .= "and criteriaUnemployment.unemployment_criteria_is_active = 1 ";
        $sql .= "where criteriaHousehold.household_criteria_program_id = household.household_program_aid ";
        $sql .= "and criteriaIncome.income_criteria_program_id = income.income_program_aid ";
        $sql .= "and criteriaPopulation.population_criteria_program_id = population.population_program_aid ";
        $sql .= "and criteriaUnemployment.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by household.household_program_aid, ";
        $sql .= "income.income_program_aid, ";
        $sql .= "population.population_program_aid, ";
        $sql .= "unemployment.unemployment_program_aid ";
        $sql .= "limit {$start}, {$total} ";

        $result = $this->connection->query($sql);

        return $result;
    }
}
