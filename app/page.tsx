"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, type Variants } from "framer-motion";
import {
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function CV() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-200">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="container mx-auto py-16 px-4 max-w-5xl relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-800 mb-10 overflow-hidden relative"
        >
          <div
            className="absolute top-0 right-0 p-4 pointer-events-none"
            style={{ opacity: 0.1 }}
          >
            <Code2 size={120} />
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-purple-600 rounded-full blur-lg opacity-75"></div>
              <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-white dark:border-slate-800 shadow-2xl relative">
                <AvatarFallback className="text-5xl font-bold bg-linear-to-br from-blue-600 to-purple-700 text-white">
                  PT
                </AvatarFallback>
              </Avatar>
              <div
                className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900"
                title="Open to work"
              ></div>
            </motion.div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-2">
                  Phạm Đình Thành
                </motion.h1>
                <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-1 border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 rounded-full"
                  >
                    Lập trình viên Front-end
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  >
                    1.5 năm kinh nghiệm
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400 mt-4">
                <div className="flex items-center justify-center md:justify-start gap-2 dark:hover:bg-slate-800 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>thanh236200210a@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 dark:hover:bg-slate-800 rounded-lg">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>0333864471</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  <span>Giáp Bát, Hà Nội</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* Summary Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Tóm tắt chuyên môn
                </h2>
              </div>

              <Card className="border-none shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="leading-relaxed text-slate-700 dark:text-slate-300 text-lg">
                    Lập trình viên Front-end với kinh nghiệm thực chiến trên các
                    hệ thống CMS, Dashboard quản lý hàng không và Landing page.
                    Có kinh nghiệm chuyên sâu về{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      React/Next.js
                    </span>{" "}
                    và tối ưu hóa hiệu suất Web.
                  </p>
                  <Separator className="my-4 bg-slate-100 dark:bg-slate-700" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                        Core Tech
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                          (skill) => (
                            <Badge
                              key={skill}
                              className="bg-slate-900 text-white hover:bg-slate-800 px-3 py-1 text-sm"
                            >
                              {skill}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                        Libraries & Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Ant Design",
                          "Shadcn UI",
                          "TanStack Query v5",
                          "Redux Toolkit",
                          "Zustand",
                          "Vite",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Experience Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Kinh nghiệm làm việc
                </h2>
              </div>

              <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-12">
                {/* Job 1 */}
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-50 dark:ring-blue-900/20"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Công ty giải pháp hóa đơn điện tử M-invoice
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Lập trình viên Front-end Reactjs
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit mt-2 sm:mt-0 font-mono text-xs border-blue-200 bg-blue-50 text-blue-700"
                    >
                      3/2025 - Hiện tại
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <Card className="group hidden! hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-bold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Dự án: Hệ thống Quản trị Bán hàng GoldService
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {["ReactJS", "Ant Design", "Redux Toolkit"].map(
                            (t) => (
                              <span
                                key={t}
                                className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                              >
                                {t}
                              </span>
                            ),
                          )}
                        </div>
                        <ul className="list-disc pl-4 space-y-1.5 marker:text-blue-500">
                          <li>
                            Xây dựng hệ thống quản lý sản phẩm và danh mục đa
                            cấp, tối ưu hóa quy trình CRUD.
                          </li>
                          <li>
                            Phát triển module Quản lý địa chính (Tỉnh/Xã) với
                            khả năng lọc và xử lý dữ liệu phức tạp.
                          </li>
                          <li>
                            Triển khai giao diện quản trị tin tức tích hợp Rich
                            Text Editor.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-200 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Dự án: Hệ thống Điều hành Bay Lotus Airport
                          </div>
                          <a
                            href="https://lao.minvoice.com.vn"
                            target="_blank"
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-xs flex items-center gap-1 text-blue-500 hover:underline"
                          >
                            lao.minvoice.com.vn{" "}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "React 18",
                            "TypeScript 5.8",
                            "Vite 6",
                            "Tailwind CSS 4",
                            "Ant Design 6",
                            "TanStack Query v5",
                            "Redux Toolkit",
                            "dnd-kit",
                            "i18next",
                          ].map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-3">
                          <div>
                            <strong className="text-blue-600 dark:text-blue-400">
                              Kiến trúc Phân quyền (RBAC) & Bảo mật hệ thống:
                            </strong>
                            <ul className="list-disc pl-4 mt-1 space-y-1 marker:text-blue-400">
                              <li>
                                Thiết kế và triển khai cơ chế lọc Menu động dựa
                                trên hệ thống phân quyền đa cấp (RBAC).
                              </li>
                              <li>
                                Xây dựng Custom Hooks xử lý logic kiểm soát truy
                                cập phức tạp (String/Array permissions), đảm bảo
                                an toàn dữ liệu cho: Admin, Operations,
                                Department.
                              </li>
                              <li>
                                Đảm bảo tính cá nhân hóa giao diện và bảo mật
                                luồng nghiệp vụ.
                              </li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-blue-600 dark:text-blue-400">
                              Quản lý Nghiệp vụ & Dữ liệu Hàng không:
                            </strong>
                            <ul className="list-disc pl-4 mt-1 space-y-1 marker:text-blue-400">
                              <li>
                                Phát triển các module quản lý dữ liệu hành khách
                                và bay chuyên sâu.
                              </li>
                              <li>
                                Xây dựng giao diện điều hành lịch bay chi tiết
                                (Departure, Arrival, Seasonal, Combined).
                              </li>
                              <li>
                                Quản lý danh mục kỹ thuật phức tạp (PTS
                                Standard, Jobs, Fleet, Airport).
                              </li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-blue-600 dark:text-blue-400">
                              Tối ưu hóa Hiệu suất & UX:
                            </strong>
                            <ul className="list-disc pl-4 mt-1 space-y-1 marker:text-blue-400">
                              <li>
                                Ứng dụng TanStack Query v5 giảm 50% request
                                thừa, đảm bảo đồng nhất dữ liệu realtime.
                              </li>
                              <li>
                                Tích hợp dnd-kit và các thư viện chuyên dụng
                                (React Scheduler, DayPilot) tối ưu quy trình sắp
                                xếp lịch bay.
                              </li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-blue-600 dark:text-blue-400">
                              Báo cáo & Quy trình:
                            </strong>
                            <ul className="list-disc pl-4 mt-1 space-y-1 marker:text-blue-400">
                              <li>
                                Dashboard báo cáo hiệu suất với Ant Design
                                Charts.
                              </li>
                              <li>Đa ngôn ngữ toàn diện với i18next</li>
                              <li>
                                Kiểm soát chất lượng mã nguồn với Husky và
                                Eslint
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-50 dark:ring-blue-900/20"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Công ty cổ phần Appota
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Lập trình viên Front-end Reactjs/Nextjs
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit mt-2 sm:mt-0 font-mono text-xs border-blue-200 bg-blue-50 text-blue-700"
                    >
                      6/2024 - 12/2024
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <Card className="group hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-200 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span>Hệ sinh thái Lịch Như Ý</span>
                          </div>
                          <div className="flex gap-2 text-xs font-normal opacity-0 group-hover:opacity-100 transition-opacity">
                            <a
                              href="https://prod.lichnhuy.vn"
                              target="_blank"
                              className="text-blue-500 hover:underline flex items-center gap-1"
                            >
                              Web <ExternalLink className="w-3 h-3" />
                            </a>
                            <span className="text-slate-300">|</span>
                            <a
                              href="https://lich.mobi"
                              target="_blank"
                              className="text-blue-500 hover:underline flex items-center gap-1"
                            >
                              Landing <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "Next.js",
                            "Tailwind CSS",
                            "Ant Design",
                            "TypeScript",
                          ].map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <ul className="list-disc pl-4 space-y-1.5 marker:text-blue-400">
                          <li>
                            Tối ưu hiển thị (Responsive), tốc độ tải trang nhanh
                            và chuẩn SEO.
                          </li>
                          <li>
                            Tính toán chuyển đổi ngày âm dương, Thần số học,
                            Cung hoàng đạo, Tử vi với độ chính xác cao.
                          </li>
                          <li>
                            Quản lý nội dung đa dạng (Âm nhạc, Tarot, Tin tức,
                            Danh ngôn) và quản lý người dùng.
                          </li>
                          <li>
                            Xây dựng hệ thống đăng ký/đăng nhập và phân quyền
                            chặt chẽ.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Hệ thống Quản trị Crawler Truyện (Internal Tool)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {["Next.js", "Tailwind CSS", "Google OAuth"].map(
                            (t) => (
                              <span
                                key={t}
                                className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                              >
                                {t}
                              </span>
                            ),
                          )}
                        </div>
                        <ul className="list-disc pl-4 space-y-1.5 marker:text-blue-400">
                          <li>
                            Xây dựng công cụ quản trị nội dung nội bộ, hỗ trợ
                            biên tập viên quản lý danh sách truyện.
                          </li>
                          <li>
                            Đăng nhập bảo mật và thuận tiện cho người dùng nội
                            bộ.
                          </li>
                          <li>
                            Phát triển trọn bộ tính năng Thêm, Sửa, Xóa dữ liệu
                            truyện, tối ưu quy trình xử lý từ Crawler.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-50 dark:ring-blue-900/20"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Công ty Cổ phần Công nghệ WINDSOFT
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Thực tập sinh React Native
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit mt-2 sm:mt-0 font-mono text-xs border-blue-200 bg-blue-50 text-blue-700"
                    >
                      6/2023 - 8/2023
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-white dark:bg-slate-800 border-dashed">
                      <CardContent className="pt-4 text-sm text-slate-600 dark:text-slate-300">
                        Tham gia phát triển ứng dụng mobile (Android) sử dụng
                        React Native. Tối ưu UI/UX và phát triển các module Ghi
                        chú, Trang chủ.
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Học vấn
                </h2>
              </div>
              <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-slate-800">
                <div className="h-2 bg-indigo-500"></div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-1">
                    ĐH Công nghiệp Hà Nội
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">
                    Công nghệ thông tin
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">2020 - 2024</span>
                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none">
                      Đã tốt nghiệp
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Projects Section */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Dự án cá nhân
                </h2>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all bg-white dark:bg-slate-800">
                    <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                      <CardTitle className="text-base font-bold flex justify-between items-center">
                        E-commerce Kanban
                        <Badge
                          variant="outline"
                          className="bg-pink-50 text-pink-600 border-pink-200 text-[10px]"
                        >
                          FULLSTACK
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-4 text-sm">
                      <p className="text-slate-600 dark:text-slate-300 mb-3">
                        Hệ thống bán quần áo tích hợp quản lý Kanban.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {[
                          "NextJs",
                          "NodeJs",
                          "Mongo",
                          "Express",
                          "ReactJs",
                        ].map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-semibold text-slate-600 dark:text-slate-400"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <a
                          href="https://github.com/phamdinhthanhcntt6/KanBan_web"
                          target="_blank"
                          className="p-2 rounded bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex justify-between items-center border border-slate-100 dark:border-slate-600"
                        >
                          <span className="font-semibold text-xs text-slate-700 dark:text-slate-200">
                            Web Client
                          </span>
                          <Github className="w-3 h-3 text-slate-400" />
                        </a>
                        <a
                          href="https://github.com/phamdinhthanhcntt6/KanBan_client"
                          target="_blank"
                          className="p-2 rounded bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex justify-between items-center border border-slate-100 dark:border-slate-600"
                        >
                          <span className="font-semibold text-xs text-slate-700 dark:text-slate-200">
                            Web Admin
                          </span>
                          <Github className="w-3 h-3 text-slate-400" />
                        </a>
                        <a
                          href="https://github.com/phamdinhthanhcntt6/KanBan_server"
                          target="_blank"
                          className="p-2 rounded bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex justify-between items-center border border-slate-100 dark:border-slate-600"
                        >
                          <span className="font-semibold text-xs text-slate-700 dark:text-slate-200">
                            Backend
                          </span>
                          <Github className="w-3 h-3 text-slate-400" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
