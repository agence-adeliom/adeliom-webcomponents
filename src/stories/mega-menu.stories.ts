import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Header/MegaMenu',
  parameters: {
    layout: ''
  }
} satisfies Meta;

export const MegaMenu1: StoryObj = {
    name: 'MegaMenu 1',
    render: () => html`
        <div class="w-full border-b border-inputTextColor py-6 max-lg:px-4">
            <div class="container mx-auto grid grid-cols-4 gap-6">
                <!-- Column 1 start -->                  
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->  
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                             
                </div>
                <!-- Column 1 end -->  

                <!-- Column 2 start -->  
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->  
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                             
                </div>
                <!-- Column 2 end -->  

                <!-- Column 3 start -->
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->  
                    <!-- link - start -->
                    <a href="#" class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                             
                </div>                    
                <!-- Column 3 end -->     
                
                <!-- Column 4 start -->     
                <div class="col-span-full lg:col-span-1 bg-neutral-100 p-4 lg:p-6 flex flex-col justify-between">
                    <!-- title - start -->
                    <span class="group flex gap-4">
                        <div>
                            <div class="mb-1 font-semibold text-xl">Title</div>
                            <p class="text-sm text-neutral-500">
                                Posuere placerat mauris tellus est metus id pretium nulla pellentesque.
                            </p>
                        </div>
                    </span>
                    <!-- title - end -->   
                    <awc-button href="#" variant="primary" class="w-full lg:w-fit max-lg:mt-6" size="medium">Button</awc-button>
                </div>
                <!-- Column 4 end -->                     
            </div>
        </div>
    `
}

export const MegaMenu2: StoryObj = {
    name: 'MegaMenu 2',
    render: () => html`
        <div class="w-full border-b border-inputTextColor py-6 max-lg:px-4">
            <div class="container mx-auto grid grid-cols-4 gap-6">
                <!-- Column 1 start -->                  
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                            
                </div>
                <!-- Column 1 end -->  

                <!-- Column 2 start -->  
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                          
                </div>
                <!-- Column 2 end -->  

                <!-- Column 3 start -->
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                           
                </div>                    
                <!-- Column 3 end -->     
                
                <!-- Column 4 start -->     
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </a>
                    <!-- link - end -->                                                            
                </div>      
                <!-- Column 4 end -->                     
            </div>
        </div>
    `
}

export const MegaMenu3: StoryObj = {
    name: 'MegaMenu 3',
    render: () => html`
        <div class="w-full border-b border-inputTextColor py-6 max-lg:px-4">
            <div class="container mx-auto grid grid-cols-4 gap-6">
                <!-- Column 1 start -->                  
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- title - start -->
                    <span class="group flex gap-2">
                        <div>
                            <div class="mb-1 font-semibold text-xl">Title</div>
                            <p class="text-sm text-neutral-500">
                                At semper viverra senectus tincidunt facilisi eget id fringilla ornare.
                            </p>
                        </div>
                    </span>
                    <!-- title - end -->                                                           
                </div>
                <!-- Column 1 end -->  

                <!-- Column 2 start -->  
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->        
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->                                                                          
                </div>
                <!-- Column 2 end -->  

                <!-- Column 3 start -->
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->      
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->                                                                             
                </div>                    
                <!-- Column 3 end -->     
                
                <!-- Column 4 start -->     
                <div class="col-span-full lg:col-span-1 flex flex-col gap-6">
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->     
                    <!-- link - start -->
                    <a href="#" class="group flex gap-2">
                        <div
                        class="flex h-6 w-6 shrink-0 items-center justify-center"
                        >
                            <awc-icon name="grid"></awc-icon>
                        </div>
                        <div>
                            <div class="mb-1 font-semibold">Nav Link</div>
                        </div>
                    </a>
                    <!-- link - end -->                                                                               
                </div>      
                <!-- Column 4 end -->                     
            </div>
        </div>
    `
}