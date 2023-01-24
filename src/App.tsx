import { createCtx } from './contexts/inputContext';
import Form from './components/Form';

const [ctx, TextProvider] = createCtx('');
export const TextContext = ctx;

function App() {
  return (
    <TextProvider>
      <Form />
    </TextProvider>
  );
}

export default App;
