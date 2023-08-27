import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutsAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'
export const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutsAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos .</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit">
          <Play size={24} /> Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
