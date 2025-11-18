"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Log, LogsTableProps } from "@/utils/type";

export default function LogsTable({ page }: LogsTableProps) {
  const [data, setData] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const DRONE_ID = process.env.NEXT_PUBLIC_DRONE_ID;

        const res = await fetch(`${API_URL}/logs/${DRONE_ID}`);

        if (!res.ok) {
          console.error("API error:", res.status, res.statusText);
          setData([]); // fallback เพื่อให้ UI รันต่อได้
          return;
        }

        const json = await res.json();
        setData(json);

      } catch (err) {
        console.error("Fetch failed:", err);
        setData([]); // fallback เวลา fetch พังจริง ๆ เช่น CORS, network
      } finally {
        setLoading(false);
      }
    }

    fetchLogs();
  }, []);


  const limit = 6;
  const total = data.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(page, 1), totalPages); // ✅ clamp page
  const logs = data.slice((currentPage - 1) * limit, currentPage * limit);

  const paginationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="space-y-6">
      <div className="rounded-md overflow-hidden shadow-md border border-gray-300">
        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="text-white text-center border-r border-gray-300">
                Created
              </TableHead>
              <TableHead className="text-white text-center border-r border-gray-300">
                Country
              </TableHead>
              <TableHead className="text-white text-center border-r border-gray-300">
                Drone ID
              </TableHead>
              <TableHead className="text-white text-center border-r border-gray-300">
                Drone Name
              </TableHead>
              <TableHead className="text-white text-center">Celsius</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  Loading...
                </TableCell>
              </TableRow>
            ) : logs.length > 0 ? (
              logs.map((log, i) => (
                <motion.tr
                  key={log.created + log.drone_id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300 text-center border-r border-gray-300"
                >
                  <TableCell className="border-gray-300 border-r">
                    {new Date(log.created).toLocaleString()}
                  </TableCell>
                  <TableCell className="border-gray-300 border-r">
                    {log.country}
                  </TableCell>
                  <TableCell className="border-gray-300 border-r">
                    {log.drone_id}
                  </TableCell>
                  <TableCell className="border-gray-300 border-r">
                    {log.drone_name}
                  </TableCell>
                  <TableCell>{log.celsius}</TableCell>
                </motion.tr>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No logs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </div>

      {/* Pagination */}
      <motion.div
        key={currentPage}
        className="flex justify-between items-center gap-2 mt-10"
        initial="hidden"
        animate="visible"
        variants={paginationVariants}
      >
        {/* Previous */}
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          asChild
          className="!bg-primary text-white hover:!bg-primary-foreground hover:!text-white"
        >
          <Link href={`/logsTable?page=${Math.max(1, currentPage - 1)}`}>
            Previous
          </Link>
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === currentPage ? "default" : "outline"}
              asChild
              className={
                p === currentPage
                  ? "!bg-primary text-white"
                  : "hover:!bg-primary hover:!text-white"
              }
            >
              <Link href={`/logsTable?page=${p}`}>{p}</Link>
            </Button>
          ))}
        </div>

        {/* Next */}
        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          asChild
          className="!bg-primary text-white hover:!bg-primary-foreground hover:!text-white"
        >
          <Link href={`/logsTable?page=${Math.min(totalPages, currentPage + 1)}`}>
            Next
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
