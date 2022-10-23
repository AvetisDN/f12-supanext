import Image from "next/image";
import { useRouter } from "next/router";

const UserMenu = ({ user, auth }) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <Image
        src={user.user_metadata.avatar_url}
        alt={user.user_metadata.full_name}
        width={32}
        height={32}
        className="rounded-full"
      />
      {user.user_metadata.full_name}
      <button
        className="bg-rose-500 text-white p-2 flex items-center gap-2 rounded leading-none ml-2"
        onClick={async () => {
          await auth.signOut();
          router.push("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
