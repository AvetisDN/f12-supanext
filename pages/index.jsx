import { useEffect, useState } from "react";
import AddNew from "../components/main/add_new";
import Table from "../components/main/table";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

export default function Home({ user }) {
  const supabaseClient = useSupabaseClient();
  const [formData, setFormData] = useState({
    name: "",
    activity: "",
    start_date: "",
    end_date: "",
  });
  const [activities, setActivities] = useState([]);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fetchData = async () => {
    const { data } = await supabaseClient.from("activities").select();
    setActivities(data);
  };
  const deleteItem = async (id) => {
    await supabaseClient.from("activities").delete().eq("id", id);
    fetchData();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabaseClient.from("activities").insert(formData);
    setFormData({
      name: "",
      activity: "",
      start_date: "",
      end_date: "",
    });
    fetchData();
    console.error(error);
  };
  useEffect(() => {
    console.log(user);
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-black text-center">
        NextJS + Tailwindcss + Inter Font
      </h1>
      <div className="flex gap-6 mt-6">
        <AddNew {...{ formData, handleInputChange, handleSubmit }} />
        <section className="flex-grow">
          {activities.length ? (
            <Table {...{ activities, deleteItem }} />
          ) : (
            <div className="text-center text-xl opacity-50">
              No activities yet
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
  async getServerSideProps(ctx, supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return { props: { user } };
  },
});
