'use client'
import React, { useState } from 'react';
import { ShoppingCart, Package, CreditCard, FileText, Receipt, DollarSign, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [ecommerceOpen, setEcommerceOpen] = useState(true);

  const menuItems = [
    { icon: Package, label: 'Products', path: '/products', highlight: true },
    { label: 'Add Product', path: '/products/add', indent: true },
    { icon: FileText, label: 'Invoices', path: '/invoices' },
    { label: 'Create Invoice', path: '/invoices/create', indent: true },
 
 
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-4">
            <button
              onClick={() => setEcommerceOpen(!ecommerceOpen)}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">E-commerce</span>
                <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">NEW</span>
              </div>
              {ecommerceOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
            </button>

            {ecommerceOpen && (
              <div className="mt-2 ml-4 space-y-1">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.path}
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                        item.indent ? 'ml-4' : ''
                      } ${item.highlight ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      <span className={item.highlight ? 'font-medium' : ''}>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              
            
            
               
           
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">New product added</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Invoice created</p>
                    <p className="text-sm text-gray-500">5 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Payment received</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}