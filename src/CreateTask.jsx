import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  ArrowLeft,
  CalendarDays,
  User,
  Flag,
  FileText,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
function CreateTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Collect form data
  const onSubmit = (data) => {
    console.log("Task Created Successfully!");
    console.log("Task Details:", data);

    alert("Task created successfully! Check the browser console.");
    reset();
  };

  const inputClass =
    "h-12 border-white/25 bg-[#39283f]/70 text-white placeholder:text-white/45 focus-visible:ring-[#e9b4df]";

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#211027] via-[#38203e] to-[#704b70] px-5 py-12 text-white">
      {/* Background decoration */}

      {/* Clear pink circle */}
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#ed9bb7] opacity-90" />

      {/* Clear purple circle */}
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-[#9865dc] opacity-90" />

      {/* Back button */}

      <div className="relative z-10 mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#ffc4dc]"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Form card */}

        <div className="rounded-[28px] border border-white/30 bg-[#604b63]/95 p-7 shadow-2xl shadow-black/30 sm:p-10">
          {/* Heading */}

          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[#f6c6ed]">
              <ClipboardList size={32} />
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl">Create New Task</h1>

            <p className="mt-3 text-white/75">
              Organize your work and manage your tasks efficiently.
            </p>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Task Title */}

            <div className="space-y-2">
              <Label className="text-white">Task Title *</Label>

              <div className="relative">
                <ClipboardList
                  className="absolute left-3 top-3.5 text-white/60"
                  size={19}
                />

                <Input
                  type="text"
                  placeholder="Enter task title"
                  className={`${inputClass} pl-11`}
                  {...register("taskTitle", {
                    required: "Task title is required",
                  })}
                />
              </div>

              {errors.taskTitle && (
                <p className="text-sm text-pink-200">
                  {errors.taskTitle.message}
                </p>
              )}
            </div>

            {/* Description */}

            <div className="space-y-2">
              <Label className="text-white">Description *</Label>

              <div className="relative">
                <FileText
                  className="absolute left-3 top-4 text-white/60"
                  size={19}
                />

                <textarea
                  placeholder="Describe your task..."
                  rows={4}
                  className="w-full rounded-xl border border-white/25 bg-[#39283f]/70 py-3 pl-11 pr-4 text-white placeholder:text-white/45 outline-none focus:ring-2 focus:ring-[#e9b4df]"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
              </div>

              {errors.description && (
                <p className="text-sm text-pink-200">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Assigned Employee */}

            <div className="space-y-2">
              <Label className="text-white">Assigned Employee *</Label>

              <div className="relative">
                <User
                  className="absolute left-3 top-3.5 text-white/60"
                  size={19}
                />

                <Input
                  type="text"
                  placeholder="Enter employee name"
                  className={`${inputClass} pl-11`}
                  {...register("assignedEmployee", {
                    required: "Employee name is required",
                  })}
                />
              </div>

              {errors.assignedEmployee && (
                <p className="text-sm text-pink-200">
                  {errors.assignedEmployee.message}
                </p>
              )}
            </div>

            {/* Priority */}

            <div className="space-y-2">
              <Label className="text-white">Priority *</Label>

              <div className="relative">
                <Flag
                  className="absolute left-3 top-3.5 z-10 text-white/60"
                  size={19}
                />

                <select
                  className="h-12 w-full appearance-none rounded-xl border border-white/25 bg-[#39283f] pl-11 pr-4 text-white outline-none focus:ring-2 focus:ring-[#e9b4df]"
                  {...register("priority", {
                    required: "Please select priority",
                  })}
                >
                  <option value="" className="bg-[#39283f]">
                    Select Priority
                  </option>

                  <option value="Low" className="bg-[#39283f]">
                    Low
                  </option>

                  <option value="Medium" className="bg-[#39283f]">
                    Medium
                  </option>

                  <option value="High" className="bg-[#39283f]">
                    High
                  </option>

                  <option value="Critical" className="bg-[#39283f]">
                    Critical
                  </option>
                </select>
              </div>

              {errors.priority && (
                <p className="text-sm text-pink-200">
                  {errors.priority.message}
                </p>
              )}
            </div>

            {/* Due Date */}

            <div className="space-y-2">
              <Label className="text-white">Due Date *</Label>

              <div className="relative">
                <CalendarDays
                  className="absolute left-3 top-3.5 z-10 text-white/60"
                  size={19}
                />

                <Input
                  type="date"
                  className={`${inputClass} pl-11 [color-scheme:dark]`}
                  {...register("dueDate", {
                    required: "Due date is required",
                  })}
                />
              </div>

              {errors.dueDate && (
                <p className="text-sm text-pink-200">
                  {errors.dueDate.message}
                </p>
              )}
            </div>

            {/* Create Task Button */}

            <Button
              type="submit"
              className="h-13 w-full rounded-xl bg-gradient-to-r from-[#efc0df] to-[#d6b0ee] text-base font-bold text-[#321b37] shadow-lg transition hover:scale-[1.02] hover:brightness-110"
            >
              Create Task
              <Sparkles className="ml-2" size={19} />
            </Button>

            <p className="text-center text-xs text-white/60">
              * All fields are required
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreateTask;
