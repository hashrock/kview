import { type DashOrganization, type DashRootData } from "$utils/dash.ts";

import IconOrganization from "./icons/Organization.tsx";

function Org({ data: { name, id } }: { data: DashOrganization }) {
  return name !== null
    ? (
      <li>
        <a
          href={`/orgs/${id}`}
          class="flex items-center border rounded p-2 hover:bg-gray(200 dark:800)"
        >
          <IconOrganization size={16} />
          <div class="px-4">{name}</div>
        </a>
      </li>
    )
    : null;
}

export function OrgList(
  { data: { organizations } }: { data: DashRootData },
) {
  if (organizations.length < 0) {
    return null;
  }
  return (
    <div>
      <h1 class="text-xl font-bold py-2">Organizations</h1>
      <ul class="space-y-2">
        {organizations.map((org) => <Org data={org} />)}
      </ul>
    </div>
  );
}
