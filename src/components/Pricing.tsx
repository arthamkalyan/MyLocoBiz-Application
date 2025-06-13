
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses just getting started",
      features: [
        "Google My Business optimization",
        "Basic review management",
        "Up to 3 locations",
        "Monthly reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      description: "Best for growing businesses that need more power",
      features: [
        "Everything in Starter",
        "Advanced SEO tools",
        "Social media management",
        "Up to 10 locations",
        "Customer CRM",
        "Marketing automation",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For large businesses and franchises",
      features: [
        "Everything in Professional",
        "Unlimited locations",
        "White-label options",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="gradient-text block">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-xl scale-105' 
                  : 'border border-gray-200 hover:border-purple-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'gradient-bg text-white hover:opacity-90' 
                      : 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                  } transition-all duration-200`}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Button variant="outline" className="bg-white">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
