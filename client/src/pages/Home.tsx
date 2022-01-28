import Header from '../components/Header';
import Footer from '../components/Footer';

import BudgetForm from '../features/forms/BudgetForm';
import WeeklyChart from '../features/charts/WeeklyChart';

export default function Home() {
  return (
    <div>
      <Header />
      <WeeklyChart />
      <BudgetForm />
      <Footer />
    </div>
  );
}
