import { DisplayContextProvider } from 'components/context';
import { Demo } from 'components';

export const Hero = (props) => {
  const { children, hideMetrics, hideSheets } = props;

  return (
    <DisplayContextProvider>
      <HeroContent
        hideMetrics={hideMetrics}
        hideSheets={hideSheets}
        snippet={children}
      />
    </DisplayContextProvider>
  );
}

const HeroContent = (props) => {
  const { hideMetrics, hideSheets, snippet } = props;

  return (
    <div className='grid grid-rows lg:grid-cols-12 space-y-6'>
      <div className='lg:col-span-4 space-y-6 mr-6 mt-16'>
        <Intro />
        <div className='hidden lg:grid'>
          <Outro snippet={snippet} />
        </div>
      </div>
      <div className='lg:col-span-8'>
        <Demo
          hideMetrics={hideMetrics}
          hideSheets={hideSheets}
        />
      </div>
      <div className='grid lg:hidden'>
        <Outro
          snippet={snippet}
        />
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div className=''>
      <h1 className='text-5xl font-bold mb-9'>Supply Chain Data Product</h1>
        <div className='leading-loose space-y-6'>
          <p>Supply Chain Data Product (SCDP) at Deere is a robust data integration solution that allows for a consolidated view of supply chain data for improved operational efficiency and decision-making.
            By consolidating data from various sources, SCDP creates a seamless flow of information regarding inventory levels, production schedules, supplier performance, and logistics operations. This unified view enables better forecasting, optimization of resources, and identification of potential bottlenecks in the supply chain process.
            SCDP is designed to be a reliable source of data for all stakeholders involved in the supply chain management process, providing real-time insights to drive continuous improvement and agility within the supply chain network.</p>
        </div>
    </div>
  )
}

const Outro = (props) => {
  const { snippet } = props;
  return (
    <div className='overflow-hidden'>
      { snippet }
    </div>
  )
}
