type Greeting = {
  greeting: string;
};

export function getTimeGreeting(name: string): Greeting {
  const hour = new Date().getHours();

  let greeting: string;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return {
    greeting: `${greeting}, ${name} 👋`,
  };
}
