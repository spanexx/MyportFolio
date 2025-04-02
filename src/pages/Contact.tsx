
import React from 'react';
import Layout from '@/components/Layout';
import { contactInfo } from '@/data/portfolioData';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Instagram, Globe, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <div className="h-1 w-20 bg-primary rounded mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted/50 rounded-full mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted/50 rounded-full mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a 
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted/50 rounded-full mt-1">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Instagram</h3>
                      <a 
                        href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.instagram}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted/50 rounded-full mt-1">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Website</h3>
                      <a 
                        href={`https://${contactInfo.website}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in new opportunities, collaborations, or just connecting 
                    with like-minded professionals. Feel free to reach out!
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <a 
                      href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-muted/50 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                    
                    <a 
                      href={`https://${contactInfo.website}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-muted/50 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Globe className="h-5 w-5 text-primary" />
                    </a>
                    
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="p-2 bg-muted/50 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
