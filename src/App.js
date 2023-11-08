import './App.css';
import Card from './Card';

function App() {
  const card1 = [
  {
    cardName : "free",
    price : "0",
    mon : "month",
    features : [
      {
        infodetails : "Single User",
        enable: true
    },
      {
        infodetails : "5GB Storage",
        enable: true
      },
      {
        infodetails  : "Unlimited Public Projects",
        enable: true
      },
      {
        infodetails : "Community Access",
        enable: true
      },
      {
        infodetails : "Unlimited Private Projects",
      enable: false
    },
      {
        infodetails : "Dedicated Phone Support",
      enable: false
      },
      {
        infodetails : "Free Subdomain",
      enable: false
    },
      {
        infodetails : "Monthly Status Reports",
      enable: false
    }]
  },

   {
    cardName : "plus",
    price : "9",
    mon : "month",
    features : [
      {
        infodetails : "5 Users",
        enable: true
    },
      {
        infodetails : "50GB Storage",
        enable: true
      },
      {
        infodetails  : "Unlimited Public Projects",
        enable: true
      },
      {
        infodetails : "Community Access",
        enable: true
      },
      {
        infodetails : "Unlimited Private Projects",
      enable: true
    },
      {
        infodetails : "Dedicated Phone Support",
      enable: true
      },
      {
        infodetails : "Free Subdomain",
      enable: true
    },
      {
        infodetails : "Monthly Status Reports",
      enable: false
    }]
  },

   {
    cardName : "pro",
    price : "49",
    mon : "month",
    features : [
      {
        infodetails : "Unlimited Users",
        enable: true
    },
      {
        infodetails : "150GB Storage",
        enable: true
      },
      {
        infodetails  : "Unlimited Public Projects",
        enable: true
      },
      {
        infodetails : "Community Access",
        enable: true
      },
      {
        infodetails : "Unlimited Private Projects",
      enable: true
    },
      {
        infodetails : "Dedicated Phone Support",
      enable: true
      },
      {
        infodetails : "Unlimited Free Subdomains",
      enable: true
    },
      {
        infodetails : "Monthly Status Reports",
      enable: true
    }]
  }]

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {card1.map((carddetails) =>{
            return <Card details={carddetails}></Card>
          }
          )}          
        </div>
      </div>
    </section>
  );
}

export default App;
