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

    public function readAllHouseholdRecommendedProgram()
    {
        $sql = "select * from {$this->tblHouseholdProgram} as household, ";
        $sql .= "{$this->tblHouseholdCriteria} as criteriaHousehold ";
        $sql .= "where household.household_program_is_active = 1 ";
        $sql .= "and criteriaHousehold.household_criteria_is_active = 1 ";
        $sql .= "and household.household_program_aid = criteriaHousehold.household_criteria_program_id ";
        $sql .= "order by household.household_program_name ";

        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllIncomeRecommendedProgram()
    {
        $sql = "select * from {$this->tblIncomeProgram} as income, ";
        $sql .= "{$this->tblIncomeCriteria} as criteriaIncome ";
        $sql .= "where income.income_program_is_active = 1 ";
        $sql .= "and criteriaIncome.income_criteria_is_active = 1 ";
        $sql .= "and criteriaIncome.income_criteria_program_id = income.income_program_aid ";
        $sql .= "order by income.income_program_name ";

        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllPopulationRecommendedProgram()
    {
        $sql = "select * from {$this->tblPopulationProgram} as population, ";
        $sql .= "{$this->tblPopulationCriteria} as criteriaPopulation ";
        $sql .= "where population.population_program_is_active = 1 ";
        $sql .= "and criteriaPopulation.population_criteria_is_active = 1 ";
        $sql .= "and criteriaPopulation.population_criteria_program_id = population.population_program_aid ";
        $sql .= "order by population.population_program_name ";

        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllUnemploymentRecommendedProgram()
    {
        $sql = "select * from {$this->tblUnemploymentProgram} as unemployment, ";
        $sql .= "{$this->tblUnemploymentCriteria} as criteriaUnemployment ";
        $sql .= "where unemployment.unemployment_program_is_active = 1 ";
        $sql .= "and criteriaUnemployment.unemployment_criteria_is_active = 1 ";
        $sql .= "and criteriaUnemployment.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by unemployment.unemployment_program_name ";

        $result = $this->connection->query($sql);

        return $result;
    }
}
