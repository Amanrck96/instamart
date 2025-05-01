import React from 'react';
import './FirebaseFeatures.css';

const FirebaseFeatures = () => {
  const features = [
    {
      category: 'Build',
      description: 'Accelerate app development',
      items: [
        {
          title: 'App Check',
          description: 'Protect your API resources from abuse'
        },
        {
          title: 'App Hosting',
          description: 'Deploy full-stack web apps at global scale'
        },
        {
          title: 'Authentication',
          description: 'An end-to-end user identity solution in under 10 lines of code'
        },
        {
          title: 'Cloud Firestore',
          description: 'Realtime updates, powerful queries, and automatic scaling'
        },
        {
          title: 'Data Connect',
          description: 'Connect your app to a PostgreSQL database with a powerful managed app server'
        },
        {
          title: 'Extensions',
          description: 'Pre-packaged solutions that save you time'
        },
        {
          title: 'Functions',
          description: 'Extend and connect Firebase features'
        },
        {
          title: 'Hosting',
          description: 'Deploy web apps in seconds'
        },
        {
          title: 'Machine Learning',
          description: 'Solve common problems in your apps with machine learning'
        },
        {
          title: 'Realtime Database',
          description: 'Store and sync data in realtime'
        },
        {
          title: 'Storage',
          description: 'Store & retrieve user generated content'
        }
      ]
    },
    {
      category: 'Run',
      description: 'Run and optimize your app with confidence',
      items: [
        {
          title: 'A/B Testing',
          description: 'Improve key flows & notifications'
        },
        {
          title: 'Analytics',
          description: 'Measure & analyze user engagement'
        },
        {
          title: 'App Distribution',
          description: 'Distribute pre-release app versions'
        },
        {
          title: 'Cloud Messaging',
          description: 'Cross-platform push messaging infrastructure between your servers and user devices'
        },
        {
          title: 'Crashlytics',
          description: 'Track, prioritize and fix stability issues that erode app quality, in realtime'
        },
        {
          title: 'Dynamic Links',
          description: 'Deep link potential users to the right place inside your app'
        },
        {
          title: 'In-App Messaging',
          description: 'Send messages to engage the right users at the right moment'
        },
        {
          title: 'Performance',
          description: 'Get insights into your app\'s performance'
        },
        {
          title: 'Remote Config',
          description: 'Slowly and safely roll out new features in your app without deploying a new version'
        },
        {
          title: 'Test Lab',
          description: 'Test on a range of devices'
        }
      ]
    },
    {
      category: 'AI',
      description: 'Build AI-powered features for your app',
      items: [
        {
          title: 'Genkit',
          description: 'Build and deploy server-side AI features powered by Google\'s GenAI models, cloud services, and your business data'
        },
        {
          title: 'Vertex AI',
          description: 'Call generative AI APIs directly from your mobile or web app, without the need to set up a backend'
        }
      ]
    }
  ];

  return (
    <div className="firebase-features">
      {features.map((category, index) => (
        <div key={index} className="feature-category">
          <h2>{category.category}</h2>
          <p className="category-description">{category.description}</p>
          <div className="feature-grid">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirebaseFeatures;