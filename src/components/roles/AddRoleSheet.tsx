import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/ui/checkbox";

type PermissionGroupKey = "testManagement" | "analytics";

interface PermissionItem {
  id: string;
  label: string;
}

interface PermissionGroup {
  enabled: boolean;
  items: PermissionItem[];
  selected: string[];
}

interface PermissionsState {
  testManagement: PermissionGroup;
  analytics: PermissionGroup;
}

interface AddRoleSheetProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const AddRoleSheet: React.FC<AddRoleSheetProps> = ({
  onClose,
}) => {
  const [roleTitle, setRoleTitle] = useState("");
  const [roleDescription, setRoleDescription] = useState("");

  const [permissions, setPermissions] = useState<PermissionsState>({
    testManagement: {
      enabled: false,
      selected: ["download_soil"],
      items: [
        { id: "request_soil", label: "Can request soil test" },
        { id: "download_soil", label: "Can download soil test result" },
        { id: "request_pest", label: "Can request pest/disease test" },
        { id: "download_pest", label: "Can download pest/disease test" },
      ],
    },
    analytics: {
      enabled: false,
      selected: ["download_analytics"],
      items: [
        { id: "view_analytics", label: "Can view analytics result" },
        { id: "download_analytics", label: "Can download analytics result" },
      ],
    },
  });

  const toggleGroup = (key: PermissionGroupKey) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        enabled: !prev[key].enabled,
      },
    }));
  };

  const togglePermission = (group: PermissionGroupKey, id: string) => {
    setPermissions((prev) => {
      const selected = prev[group].selected.includes(id)
        ? prev[group].selected.filter((p) => p !== id)
        : [...prev[group].selected, id];

      return {
        ...prev,
        [group]: {
          ...prev[group],
          selected,
        },
      };
    });
  };

  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="relative ml-auto h-full w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-8 pb-12 shadow-xl">
        <header className="mb-8 flex items-center gap-3.5">
          <button
            onClick={onClose}
            className="grid size-7 place-items-center rounded-full bg-[#E8E8E8]"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-col gap-2">
            <h5 className="font-neue text-xl font-bold text-[#130B30]">
              Add new role
            </h5>
            <h6 className="text-[#423C59]">Fill in the role details and select appropriate permission</h6>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-gray-700">
              All permission
            </h3>

            <div className="space-y-3 rounded-xl bg-gray-50 p-4">
              {[
                { key: "testManagement", label: "Test management" },
                { key: "analytics", label: "Analytics access" },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{label}</span>
                  <button
                    onClick={() => toggleGroup(key as PermissionGroupKey)}
                    className={`flex h-5 w-9 items-center rounded-full transition ${
                      permissions[key as PermissionGroupKey].enabled
                        ? "bg-green-600"
                        : "bg-[#8E98A8]"
                    }`}
                  >
                    <span
                      className={`block size-3.5 rounded-full bg-white transition ${
                        permissions[key as PermissionGroupKey].enabled
                          ? "translate-x-4.5"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="mb-0.5 text-sm text-[#130B30]">
                  Role title
                </label>
                <div className="rounded-lg bg-[#F3F6F8] p-4">
                  <input
                    type="text"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full border-none text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                    placeholder="Enter role title"
                  />
                </div>
              </div>
              <div>
                <label className="mb-0.5 text-sm text-[#130B30]">
                  Role description
                </label>
                <div className="rounded-lg bg-[#F3F6F8]">
                  <textarea
                    className="w-full border-none p-4 text-sm text-[#423C59] outline-0 placeholder:text-[#423C59] placeholder:opacity-70"
                    value={roleDescription}
                    onChange={(e) => setRoleDescription(e.target.value)}
                    placeholder="Describe role details"
                  ></textarea>
                </div>
              </div>
            </div>

            {(["testManagement", "analytics"] as PermissionGroupKey[]).map(
              (groupKey) => {
                const group = permissions[groupKey];
                if (!group.enabled) return null;

                return (
                  <div key={groupKey} className="rounded-xl bg-gray-50 p-4">
                    <h4 className="mb-3 text-sm font-semibold text-gray-700">
                      {groupKey === "testManagement"
                        ? "Test management"
                        : "Analytics access"}
                    </h4>

                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <label
                          key={item.id}
                          className="flex items-center gap-3 text-sm"
                        >
                          <Checkbox
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-blue-700"
                            checked={group.selected.includes(item.id)}
                            onCheckedChange={() =>
                              togglePermission(groupKey, item.id)
                            }
                          />
                          {item.label}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              },
            )}

            <Button onClick={onClose} variant="primary">
              Add role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
