import { redirect } from "next/navigation";

/**
 * A function for verifying if the user is authorized.
 * In this case returns undefined, since the user isn't authorized
 */
const getClarioSession = () => {
  return undefined;
};

export default function Home() {
  const session = getClarioSession();

  if (!session) {
    redirect("/authorization");
  }

  return <main>Clario app</main>;
}
