import { FormProvider } from 'contexts/FormContext';
import Home from 'pages/Home';


function App() {
  

  return (
    <FormProvider>
      <Home />
    </FormProvider>
  );
}

export default App;
