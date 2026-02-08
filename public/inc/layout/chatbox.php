<div class="chatbox flex gap-5 w-full relative justify-center mt-2.5 lg:mt-4 2xl:mt-7.5">
  <div class="flex flex-col items-center w-full md:max-w-190 px-4">
    <div
      class="w-full md:min-w-190 bg-white/5 border border-solid border-jetblack lightm:border-gainsboro overflow-visible input-wrapper box-border search-input-wrapper  rounded-2xl mt-3 shadow-elevated">
      <div class="input px-3 pb-3 cursor-text empty">
        <div class="n-config-provider"></div>
        <div class="textarea-wrapper parent-div flex-col pt-3 resize-none">
          <textarea name="query"
            class="textarea-prompt w-full resize-none  placeholder:text-light-gray/50 text-sm lg:text-base text-white max-h-50 min-h-17.5 lg:min-h-0"
            type="text" placeholder="Type your message here. Press Shift Enter to insert a line break" value=""
            id="seach_form_home"></textarea>
          <div class="icon-group flex justify-between items-center">
            <div class="flex items-center gap-2">
              <div class="flex items-center justify-center rounded-md text-sm text-cool-gray">
                <div
                  class=" flex items-center hover:bg-charcoal-gray bg-dark-slate lightm:bg-white lightm:hover:bg-gainsboro cursor-pointer transition-all duration-200 ease-in-out py-2 px-3 flex-start rounded-4xl lightm:border lightm:border-gainsboro">
                  <span class="icon icon-personalize-form w-5 h-5 shrink-0"></span>
                  <div class="text-xs hidden md:flex ml-2 text-white">Personalize</div>
                </div>
              </div>
              <div class="custom-tools-icon-container">
                <div class="custom-tools-icon-container relative">
                  <div
                    class=" bg-dark-slate lightm:bg-white hover:bg-charcoal-gray lightm:hover:bg-gainsboro cursor-pointer transition-all duration-200 ease-in-out flex gap-2 p-2 rounded-full lightm:border lightm:border-gainsboro ">
                    <span class="icon icon-custom-tools w-5 h-5 inline-block"></span>
                  </div>
                  <div
                    class="promption-tips-wrapper items-center border-0 m-0 absolute z-1 -bottom-[19px] left-1/2 -translate-x-1/2">

                    <span class="icon icon-carret-up-tools w-4 h-2 inline-block"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="right-icon-group gap-2 flex items-center justify-end">
                <div class="upload-attachments lightm:border lightm:border-gainsboro  lightm:rounded-[50%]">
                  <div class="sub-pop relative">
                    <div
                      class="flex items-center gap-2.5 cursor-pointer bg-color-dark-slate p-0 text-color-white-c text-sm rounded-lg w-full relative ">
                      <div
                        class=" bg-dark-slate hover:bg-charcoal-gray lightm:bg-white lightm:hover:bg-gainsboro cursor-pointer transition-all duration-200 ease-in-out btn-style1 w-9 h-9 flex items-center justify-center rounded-full">
                        <span class="icon icon-attach-file w-5 h-5 inline-block"></span>
                      </div>
                    </div>
                    <div
                      class="hidden absolute right-0 z-10  max-h-100 p-2 overflow-auto bg-dark-slate border border-solid border-charcoal-gray rounded-xl shadow-subpop text-left block transition-all duration-300 ease-in-out lightm:bg-white lightm:border-gainsboro w-65 -top-30">
                      <ul class="flex flex-col gap-0.5 list-none m-0 p-0">
                        <li
                          class="flex text-white-c text-sm p-3 py-3 cursor-pointer rounded-xl ease-linear hover:bg-deep-space lightm:hover:bg-gainsboro gap-2.5 relative">
                          <span class="icon icon-upload-file w-6 h-6 inline-block"></span>
                          Browse Local Files
                          <input type="file" class="attach_file absolute top-0 left-0 w-full h-full opacity-0" />
                        </li>
                        <li
                          class="flex text-white-c text-sm p-3 py-3 cursor-pointer rounded-xl ease-linear hover:bg-deep-space lightm:hover:bg-gainsboro gap-2.5">
                          <span class="icon icon-from-drive w-6 h-6 inline-block"></span>
                          Choose from Google Drive
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  class="record-btn  bg-dark-slate hover:bg-charcoal-gray lightm:bg-white lightm:hover:bg-gainsboro cursor-pointer transition-all duration-200 ease-in-out btn-style1 w-9 h-9 flex items-center justify-center rounded-full item-c-active lightm:border lightm:border-gainsboro lightm:rounded-[50%]">
                  <span class="icon icon-record w-5 h-5 inline-block"></span>
                </div>
                <div
                  class="input-icon  bg-dark-slate hover:bg-charcoal-gray lightm:bg-white lightm:hover:bg-gainsboro cursor-pointer transition-all duration-200 ease-in-out btn-style1 w-9 h-9 flex items-center justify-center rounded-full lightm:border lightm:border-gainsboro lightm:rounded-[50%]">
                  <span class="icon icon-send w-5 h-5 inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center w-[95%] z-0">
      <div
        class=" rounded-xl bg-gradient-to-t from-white/10 to-white/0 lightm:bg-gradient-to-t lightm:from-gainsboro lightm:to-gainsboro/30 rounded-b-xl border-t-0 cursor-pointer mt-0 p-2.5 px-3 relative w-full z-10">
        <div class=" flex items-center">
          <div class=" flex gap-1.5 lg:gap-3 mr-2.5 lg:mr-4">
            <div class=" flex items-center justify-center">
              <span class="icon icon-gmail w-4 h-4 inline-block"></span>
            </div>
            <div class=" flex items-center justify-center">
              <span class="icon icon-gg-calendar w-4 h-4 inline-block"></span>
            </div>
            <div class=" flex items-center justify-center">
              <span class="icon icon-gg-drive w-4 h-4 inline-block"></span>
            </div>
            <div class=" flex items-center justify-center">
              <span class="icon icon-doc w-4 h-4 inline-block"></span>
            </div>
          </div>
          <div class="text-dark-gray  text-xs lg:text-sm">
            RunAI supports personalized tools
          </div>
        </div>
      </div>
    </div>

  </div>
</div>