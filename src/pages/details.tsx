import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
const DetailsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          IND vs AUS LIVE, T20 World Cup 2024 Super Eight: India Qualify For Semis Even Before The End Of Australia Match
        </h1>
        <div className="flex justify-center">
          <img src="https://c.ndtvimg.com/2024-06/o0ckmsao_india-afp_625x300_24_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" className="rounded-lg" alt="Image" />
        </div>
        {/* Add additional details content here */}
      </main>
      <Footer />
    </div>
  );
}

export default DetailsPage;