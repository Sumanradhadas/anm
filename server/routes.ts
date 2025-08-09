import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertAdmissionInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid request data" 
      });
    }
  });

  // Admission inquiry endpoint
  app.post("/api/admission-inquiry", async (req, res) => {
    try {
      const validatedData = insertAdmissionInquirySchema.parse(req.body);
      const inquiry = await storage.createAdmissionInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid request data" 
      });
    }
  });

  // Get all contact inquiries (for admin)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact inquiries" 
      });
    }
  });

  // Get all admission inquiries (for admin)
  app.get("/api/admission-inquiry", async (req, res) => {
    try {
      const inquiries = await storage.getAllAdmissionInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch admission inquiries" 
      });
    }
  });

  // Prospectus download endpoint
  app.get("/api/prospectus", (req, res) => {
    // In a real implementation, this would serve the actual PDF file
    res.json({ 
      success: true, 
      message: "Prospectus download will be available soon. Please contact the institute for detailed information.",
      downloadUrl: "/prospectus-2024-25.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
