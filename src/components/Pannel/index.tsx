import { FiArrowRightCircle } from "react-icons/fi";
import { Container } from "./styles"

interface PannelProps {
  pannel: any[]
}

export function Pannel({ pannel }: PannelProps) {
  return (
    <Container>
      {pannel.map((pannel) => (
        <div key={pannel.id} className='pannel'>
          <h2>{pannel.name}</h2>
          <img src={pannel.image} alt={pannel.name} />
          <p>{pannel.description}</p>
          <div>
            <strong>{pannel.important}</strong>
            <button type='button'>
              <FiArrowRightCircle />
            </button>
          </div>
        </div>
      ))}
    </Container>
  )
}
