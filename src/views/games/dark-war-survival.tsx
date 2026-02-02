import { FormEventHandler, useState } from 'react'
import { Button } from '../../components'

export const DarkWarSurvival = () => {
  const [days, setDays] = useState('')
  const [finishDate, setFinishDate] = useState(new Date())
  const [percent, setPercent] = useState('')
  const [time, setTime] = useState('')
  const [time2, setTime2] = useState('')
  const [date, setDate] = useState('')
  const [showDoDate, setShowDoDate] = useState(false)

  function calcularTempoTotalSegundos() {
    const d = Number(days) || 0
    const [hour, minutes] = time.split(':')
    const h = Number(hour) || 0
    const m = Number(minutes) || 0

    const totalSegundos = d * 86400 + h * 3600 + m * 60

    return totalSegundos * (1 - Number(percent) / 100)
  }

  function calcularDataFutura(): Date {
    const segundos = calcularTempoTotalSegundos()
    return new Date(Date.now() + segundos * 1000)
  }

  function calcularDataInicio(): Date | null {
    if (!date || !time2) return null

    const segundos = calcularTempoTotalSegundos()

    const dataFinal = new Date(`${date}T${time2}`)

    return new Date(dataFinal.getTime() - segundos * 1000)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (showDoDate) {
      const inicio = calcularDataInicio()
      if (inicio) setFinishDate(inicio)
    } else {
      setFinishDate(calcularDataFutura())
    }
  }

  return (
    <div className="flex w-full flex-1 p-6">
      <form
        className="flex w-full flex-col gap-4 border border-gray-400 bg-white p-6 dark:bg-sidebar-dark"
        onSubmit={handleSubmit}
      >
        <p className="self-center pb-5 text-lg font-bold dark:text-text-dark">
          Calculando tempo de construção
        </p>

        <fieldset className="flex flex-col gap-4">
          <label className="dark:text-text-dark">Quantidade de dias:</label>
          <input
            className="rounded-md border border-gray-400"
            id="days"
            name="days"
            onChange={(e) => setDays(e.target.value)}
            type="number"
            value={days}
          />

          <label className="dark:text-text-dark">
            Quantas horas e minutos:
          </label>
          <input
            className="rounded-md border border-gray-400"
            id="hours"
            name="hours"
            onChange={(e) => setTime(e.target.value)}
            type="time"
            value={time}
          />

          <label className="dark:text-text-dark">
            Procentagem de desconto:
          </label>
          <input
            className="rounded-md border border-gray-400"
            id="percent"
            name="percent"
            onChange={(e) => setPercent(e.target.value)}
            type="number"
            value={percent}
          />

          <div className="flex gap-2">
            <input
              id="do-date"
              type="checkbox"
              onChange={(e) => setShowDoDate(e.target.checked)}
            />
            <label htmlFor="do-date">Definir uma data de conclusão!</label>
          </div>

          {showDoDate && (
            <>
              <label className="dark:text-text-dark">Dia:</label>
              <input
                className="rounded-md border border-gray-400"
                id="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
                type="date"
                value={date}
              />

              <label className="dark:text-text-dark">Hora:</label>
              <input
                className="rounded-md border border-gray-400"
                id="time"
                name="time"
                onChange={(e) => setTime2(e.target.value)}
                type="time"
                value={time2}
              />
            </>
          )}
        </fieldset>

        <Button className="mt-5 self-center" type="submit">
          Calcular
        </Button>

        <div className="flex flex-col items-center justify-center gap-2 dark:text-text-dark">
          <p className="text-center">
            {showDoDate
              ? 'Inicie a construção em:'
              : 'Sua construção ficará pronta em:'}
          </p>
          <p className="text-lg font-bold">{finishDate.toLocaleDateString()}</p>
          <p className="">ás</p>
          <p className="text-lg font-bold">{finishDate.toLocaleTimeString()}</p>
        </div>
      </form>
    </div>
  )
}
